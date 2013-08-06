
Template.hello.greeting = function () {
    return "Enter at your own risk. There may or may not be waffles within.";
};

Template.hello.events({
    'click a' : function (e) {
        $('body').html(Meteor.render(Template.basic));
        var templateName = $(e.target).html().toLowerCase();
        Template.hello.renderBody(templateName);

        if ($('#' + templateName)) {
            $('#' + templateName).addClass("selected");
        }

        return false;
    }
});

Template.hello.renderBody = function(templateName) {
    var newTemplate;
    switch(templateName) {
        case 'about':
            Session.set("pageTitle", "whoami");
            newTemplate = Template.about;
            break;
        case 'thoughts':
            Session.set("pageTitle", "from my brain");
            newTemplate = Template.thoughts;
            break;
        case 'design':
            Session.set("pageTitle", "doodles");
            newTemplate = Template.doodles;
            break;
        case 'work':
            Session.set("pageTitle", "substantive stuff");
            // TODO put actual template here
            window.location = 'http://www.github.com/anahm';
            return;
            // newTemplate = Template.work;
            // break;
        case 'resume':
            Session.set("pageTitle", "the list.");
            newTemplate = Template.resume;
            break;
        default:
            console.log("bleh, dunno what to do with " + templateName);
            return false;
    }

    $('#beef').html(Meteor.render(newTemplate));
    console.log("argh");
};


Template.basic.pageTitle = function () {
    return Session.get("pageTitle");
};


