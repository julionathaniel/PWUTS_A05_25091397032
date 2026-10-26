// Ajax Single Page Navigation (SPA) for UTS Requirement
function loadContent(pageName) {
    // Highlight sidebar active link
    $('.nav-link').removeClass('active');
    $(`.nav-link[data-target="${pageName}"]`).addClass('active');

    // Ajax Content Loader
    if (pageName === 'dashboard') {
        location.reload(); // Reload default index dashboard view
        return;
    }

    const targetUrl = pageName + '.html';
    $('#main-content').fadeOut(150, function() {
        $.get(targetUrl, function(data) {
            $('#main-content').html(data).fadeIn(150);
            initEvents();
        }).fail(function() {
            $('#main-content').html('<div class="p-6 bg-red-50 text-red-600 rounded-xl">Gagal memuat halaman ' + targetUrl + '</div>').fadeIn(150);
        });
    });
}

$(document).ready(function() {
    // Navigation click handler
    $('.nav-link').on('click', function(e) {
        e.preventDefault();
        const page = $(this).attr('data-target');
        loadContent(page);
    });

    initEvents();
});

function initEvents() {
    // Interactive Search & Filter in Barang Page
    $('#searchBarang').on('keyup', function() {
        const value = $(this).val().toLowerCase();
        $('.barang-item').filter(function() {
            $(this).toggle($(this).attr('data-name').toLowerCase().indexOf(value) > -1);
        });
    });

    $('.filter-btn').on('click', function() {
        $('.filter-btn').removeClass('active-filter bg-blue-600 text-white').addClass('bg-white text-slate-600');
        $(this).addClass('active-filter bg-blue-600 text-white').removeClass('bg-white text-slate-600');
        
        const cat = $(this).attr('data-category');
        if (cat === 'all') {
            $('.barang-item').show();
        } else {
            $('.barang-item').hide();
            $(`.barang-item[data-category="${cat}"]`).show();
        }
    });

    // jQuery Form Validation for Form Peminjaman (setor.html)
    $('#formPeminjaman').on('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Reset errors
        $('.error-msg').addClass('hidden');
        $('input, select, textarea').removeClass('invalid');

        // Validate NIM
        const nim = $('#nim_user').val().trim();
        if (nim === '' || nim.length < 8 || isNaN(nim)) {
            $('#nim_user').addClass('invalid').next('.error-msg').removeClass('hidden');
            isValid = false;
        }

        // Validate Nama
        const nama = $('#nama_user').val().trim();
        if (nama === '') {
            $('#nama_user').addClass('invalid').next('.error-msg').removeClass('hidden');
            isValid = false;
        }

        // Validate Barang Selection
        const barang = $('#id_barang').val();
        if (barang === '') {
            $('#id_barang').addClass('invalid').next('.error-msg').removeClass('hidden');
            isValid = false;
        }

        // Validate Dates
        const tglPinjam = $('#tgl_pinjam').val();
        const tglKembali = $('#tgl_kembali').val();
        if (tglPinjam === '') {
            $('#tgl_pinjam').addClass('invalid').next('.error-msg').removeClass('hidden');
            isValid = false;
        }
        if (tglKembali === '' || tglKembali < tglPinjam) {
            $('#tgl_kembali').addClass('invalid').next('.error-msg').removeClass('hidden');
            isValid = false;
        }

        // Validate Keperluan
        const keperluan = $('#keperluan').val().trim();
        if (keperluan === '') {
            $('#keperluan').addClass('invalid').next('.error-msg').removeClass('hidden');
            isValid = false;
        }

        if (isValid) {
            $('#alertSuccess').removeClass('hidden').hide().fadeIn();
            $('#formPeminjaman')[0].reset();
            setTimeout(function() {
                $('#alertSuccess').fadeOut();
            }, 4000);
        }
    });
}
