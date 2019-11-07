$(function () {

    console.log($('.grid-stack'));

    $.fn.collision = function () {
        var el = $(this);
        var x1 = el.offset().left;
        var y1 = el.offset().top;
        var b1 = y1 + el[0].offsetHeight;
        var r1 = x1 + el[0].offsetWidth;

        var sib = el.siblings('.widget').not('.ui-draggable-dragging');
        var res = false;
        sib.each(function () {
            var inner = $(this).find('.widget-inner');
            var x2 = inner.offset().left;
            var y2 = inner.offset().top;
            var b2 = y2 + inner[0].offsetHeight;
            var r2 = x2 + inner[0].offsetWidth;

            if ((r1 >= x2 && b1 >= y2 && y1 < y2 && x1 < r2)
                || (x1 <= r2 && b1 >= y2 && y1 < y2 && r1 > r2)
                || (r1 >= x2 && y1 <= b2 && b1 > b2 && x1 < x2)
                || (x1 <= r2 && y1 <= b2 && b1 > b2 && r1 > r2)
                || (y1 == y2 && r1 == r2 && b1 == b2 && x1 == x2)
                || (y1 >= y2 && x1 <= r2 && b1 <= b2 && r1 > r2)
                || (y1 >= y2 && r1 >= x2 && b1 <= b2 && x1 < x2)
                || (x1 >= x2 && r1 <= r2 && y1 <= b2 && b1 > b2)
                || (x1 >= x2 && y1 >= y2 && b1 <= b2 && r1 <= r2)
            ) {
                inner.css('background', 'red');
                res = true;
            } else {
                inner.css('background', '#4564ff');
                res = false;
            }
        });
        return res;
    }

    var widgetOptions = {
        minWidth: 4,
        minHeight: 2,
    };
    var gridOptions = {
        cellHeight: 80,
        verticalMargin: 10,
        animate: true
    };
    $('.grid-stack').gridstack(gridOptions);

    // add a new widget to the zone
    $(document).on('click', '.add-widget', function () {
        var grid = $('.grid-stack').data('gridstack');
        var widget = $('<div class="grid-stack-item widget" data-gs-x="4" data-gs-y="0" data-gs-width="8" data-gs-height="4"><div class="grid-stack-item-content widget-inner"></div><span class="resize-icon"></span><span class="remove-widget"></span></div>');
        grid.addWidget(widget, 0, 0, widgetOptions.minWidth, widgetOptions.minHeight, true);
    });

    // remove widget from zone
    $(document).on('click', '.remove-widget', function () {
        var grid = $(this).closest('.grid-stack').data('gridstack');
        var widget = $(this).closest('.widget');
        grid.removeWidget(widget);
    });

    // clear the zone
    $(document).on('click', '.clear-all', function () {
        var grid = $('.grid-stack');
        var widget = grid.find('.widget');
        widget.each(function () {
            grid.data('gridstack').removeWidget($(this));
        });
    });

    $(document).on('click', '.get', function () {
        $('.widget').each(function () {
            var inner = $(this).find('.widget-inner');
            console.log(inner.offset().top, inner.offset().left);
        });
    });

    $(document).on('dragstart', '.grid-stack', function (event, ui) {
        var grid = $(this);

        var widget = $(event.target);
        widget.data({
            fgx: widget.attr('data-gs-x'),
            fgy: widget.attr('data-gs-y'),
            fgw: widget.attr('data-gs-width'),
            fgh: widget.attr('data-gs-height')
        });
        console.log(widget.data().fgx, widget.data().fgy, widget.data().fgw, widget.data().fgh);

        var sib = widget.siblings('.widget');
        sib.each(function () {
            $(this).attr({
                'data-gs-locked': 'yes',
                'data-gs-no-move': 'yes',
                'data-gs-no-resize': 'yes'
            });
            grid.data('gridstack').locked($(this), true);
            grid.data('gridstack').movable($(this), false);
            grid.data('gridstack').update($(this));
        });
    });

    $(document).on('dragstop', '.grid-stack', function (event, ui) {
        var grid = $(this);

        var widget = $(event.target);
        var fgx = widget.data().fgx;
        var fgy = widget.data().fgy;
        var fgw = widget.data().fgw;
        var fgh = widget.data().fgh;

        var sib = widget.siblings('.widget');
        sib.each(function () {
            // $(this).attr({
            // 	'data-gs-locked': 'no',
            // 	'data-gs-no-move': 'no',
            // 	'data-gs-no-resize': 'no'
            // });
            grid.data('gridstack').locked($(this), true);
            grid.data('gridstack').movable($(this), true);
            grid.data('gridstack').update($(this));
        });
        // var copy = $('<div class="grid-stack-item widget" data-gs-x="4" data-gs-y="0" data-gs-width="8" data-gs-height="4"><div class="grid-stack-item-content widget-inner"></div><span class="resize-icon"></span><span class="remove-widget"></span></div>');
        // var collision = widget.collision();
        // if(collision == true) {
        // 	console.log(widget.data().fgx, widget.data().fgy, widget.data().fgw, widget.data().fgh);
        // 	grid.data('gridstack').removeWidget(widget);
        // 	grid.data('gridstack').addWidget(copy, fgx, fgy, fgw, fgh, true);
        // 	console.log('whoooooooo');
        // }

    });

    // 	$(document).on('drag', '.grid-stack', function(event, ui) {
    // 		var grid = $(this);
    //     var widget = $(event.target);

    // 		var placeholder = grid.find('.grid-stack-placeholder');
    // 		var collision = placeholder.collision();
    // 		console.log(placeholder.collision());
    // 		if(collision == true) {
    // 			// widget.update(el, x, y, width, height);
    // 			console.log('whoooooooo');
    // 		}
    // 	});




});