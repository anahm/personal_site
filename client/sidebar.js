/*
 * sidebar.js
 * Template events / text related to the sidebar.
 */

Template.basic.events({
    'click div.side_I' : function (e) {
        var clickValue = $(e.target).attr('id');

        /*~ clicking those red heels ~*/
        if (clickValue.toLowerCase() === 'home') {
            window.location = '/';
            $('body').html(Meteor.render(Template.hello));
            return;
        }

        // Want to change div styling when selected.
        // TODO will need to check this again when only rendering body
        $('.selected').removeClass("selected");
        $(e.target).addClass("selected");

        // Otherwise, want to call the switch statement to change template body
        Template.hello.renderBody(clickValue);

        return false;
    }
});

