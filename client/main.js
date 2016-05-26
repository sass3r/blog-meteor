import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.body.events({
	submit(evt,tpl){
		evt.preventDefault();
		console.log(tpl.find('[name=title]'));
		console.log("this should show later create post");
	}

});

Template.body.helpers({

	posts(){

		return [{
			title:'Post1',
			text:'Content'},
			{title:'Post2',
			text:'Content2'
		}];
	}
});
