// Backbone Code
$(function() {
    var Resume = Backbone.Model.extend();

    var ResumeData = Backbone.Collection.extend({
        model: Resume,
        url: 'scripts/resume-data.json'
    });   

    var ResumeView = Backbone.View.extend({

        render: function(data){

            var source   = document.getElementById('resumeTemplate').innerHTML,
                template = Handlebars.compile(source),
                html    = template(data);
         
            document.getElementById("resume").innerHTML = html;

            return this;
        }
    });

    var resume = new ResumeData();    
    var resumeView = new ResumeView({model: resume});
    resume.fetch({
		success: function(data) {
        	resumeView.render(data.models[0].attributes);
        }
    });

});

// Handlebars if x = y helper
Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if (a == b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
});

// Resume Template Code
jQuery(document).ready(function($) {
    /*======= Skillset *=======*/
    $('.level-bar-inner').css('width', '0');
    $(window).on('load', function() {
        $('.level-bar-inner').each(function() {
            var itemWidth = $(this).data('level');
            $(this).animate({
                width: itemWidth
            }, 800);
        });
    });
});