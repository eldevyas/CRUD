function Drag(Element, isLimited) {
    $(function() {
        var dragging = false;
        var iX, iY;
        $(Element).on('mousedown', function(e) {
            if ($(e.target).is('section')) {
                e.preventDefault();
                dragging = true;
                iX = e.clientX - this.offsetLeft;
                iY = e.clientY - this.offsetTop;
                this.setCapture && this.setCapture();
                return false;
            }

        });
        document.onmousemove = function(e) {
            if (dragging) {
                var e = e || window.event;
                var oX = e.clientX - iX;
                var oY = e.clientY - iY;

                $(Element).css({ "left": oX + "px", "top": oY + "px" });

                function LimtedArea() {
                    if ($(Element).offset().left < 0) {
                        $(Element).css('left', 0 + 'px')
                    }
                    if ($(Element).offset().top < 0) {
                        $(Element).css('top', 0 + 'px')
                    };
                    if ($(Element).offset().left > $(window).width() - $(Element).width()) {
                        $(Element).css('left', $(window).width() - $(Element).width() + 'px')
                    }
                    if ($(Element).offset().top > $(window).height() - $(Element).height()) {
                        $(Element).css('top', $(window).height() - $(Element).height() + 'px')
                    }
                }

                if (isLimited) {
                    LimtedArea();
                }

                return false;
            }
        }
        $(document).on('mouseup', function(e) {
            dragging = false;
            $(Element)[0].releaseCapture();
            e.cancelBubble = true;
        })
    })
}

export default Drag;