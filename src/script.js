var myNewApp = angular.module("myNewApp", []);
myNewApp.service("ContactService" , function(){
	var uid = 1;
	var contacts = [{
		  'id' : 0,
				 'name' : 'Jackline Chepsiror',
				 'email' : 'chepsiror@gmail.com',
				 'password': 'cheptanui',
				 'phone' : '254-91-333-910'}];
	// Save Service for sving new contact and saving existing edited contact.
	this.save = function(contact)
	{
		if(contact.id == null)
		{
			contact.id = uid++;
			contacts.push(contact);
		}
		else
		{
		for(var i in contact)
			{
				if(contacts[i].id == contact.id)
				{
					contacts[i] = contact;
				}
			}
		}
	};
	// serach for a contact
	this.get = function(id)
	{
		for(var i in contacts )
		{
			if( contacts[i].id == id)
			{
				return contacts[i];
			}
		}
	};
	//Delete a contact
	this.delete = function(id)
	{
		for(var i in contacts)
			{
				if(contacts[i].id == id)
				{
					contacts.splice(i,1);
				}
			}
	};
	//Show all contacts
	this.list = function()
	{
		return contacts;
	}	;
});