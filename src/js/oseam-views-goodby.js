// -------------------------------------------------------------------------------------------------
// OpenSeaMap Water Depth - Web frontend for depth data handling.
//
// Written in 2012 by Dominik Fässler dfa@bezono.org
//
// To the extent possible under law, the author(s) have dedicated all copyright
// and related and neighboring rights to this software to the public domain
// worldwide. This software is distributed without any warranty.
//
// You should have received a copy of the CC0 Public Domain Dedication along
// with this software. If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
// -------------------------------------------------------------------------------------------------

//RKu ++ new function "say goodbye to a user after successful logout"

OSeaM.views.Goodby = OSeaM.View.extend({
    initialize: function() {
        OSeaM.frontend.on('change:language', this.render, this);
    },
    render: function() {
        var usermodel = OSeaM.frontend.getUser();							//RKu: 
        var language = OSeaM.frontend.getLanguage();
        var template = OSeaM.loadTemplate('goodby-' + language);
        var content = $(template({
            firstname : usermodel.attributes.forename						//RKu: get first name of current user
            }));
        OSeaM.frontend.translate(content);
        this.$el.html(content);
        return this;
    }
});

//RKu --
