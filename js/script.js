// script.js
document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.gallery-item');
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            // ลบ active class จากปุ่ มทั้งหมด
            filters.forEach(f => f.classList.remove('active'));
            // เพิ่ม active class ให ้ปุ่ มที่ถูกคลิก
            filter.classList.add('active');
            const category = filter.dataset.filter;
            items.forEach(item => {
                // ซอนทุก ่ item ก่อน
                item.style.opacity = '0';

                setTimeout(() => {
                    if (category === 'all' || item.classList.contains(category)) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                        }, 50);
                    } else {
                        item.style.display = 'none';
                    }
                }, 300);
            });
        });
    });
});