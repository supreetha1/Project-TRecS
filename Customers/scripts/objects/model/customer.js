	function Customer(
					id,
					firstName, 
					lastName,
					companyName,
					emailAddress,
					pictureURL) {
		var self = this;
		self.id =  ko.observable(id);
		self.firstName =  ko.observable(firstName);
		self.lastName =  ko.observable(lastName);
		self.companyName =  ko.observable(companyName);		
		self.emailAddress =  ko.observable(emailAddress);		
		self.pictureURL =  ko.observable(pictureURL);
		self.fullName =  ko.observable(firstName + ' ' + lastName);

	}
