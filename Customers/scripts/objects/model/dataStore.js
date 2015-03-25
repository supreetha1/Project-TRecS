function customerDataService() {

	var self = this;
				
	self.getCustomers = function() {
		var customers = [

		{ 		"id": "1", "firstName": "Adele", "lastName":"Rolling in the Deep", "companyName":"SONY", 
		"pictureURL" : "../Data/{56A3419B-E150-45A4-95F0-C2344461C4E9}.jpg","emailAddress":"Track time - 3:48"},

		{		"id": "2", "firstName": "Adele", "lastName":"Someone Like You", "companyName":"SONY", 
		"pictureURL" : "../Data/{56A3419B-E150-45A4-95F0-C2344461C4E9}.jpg","emailAddress":"Track time - 4:22"},

		{		"id": "3", "firstName": "Christina", "lastName":"Greenburg", "companyName":"Ford", 
		"pictureURL" : "../Data/{BBAC9C68-68E1-49CB-88B6-905041F9982C}.jpg","emailAddress":"Track time - 5:02"},

		{		"id": "4", "firstName": "Ted", "lastName":"Sellet", "companyName":"Chrysler", 
		"pictureURL" : "../Data/{2252B9ED-E12A-4795-85E5-81B5E5B82927}.jpg","emailAddress":"Track time - 3:12"},


		{		"id": "5", "firstName": "Richard", "lastName":"Alterson", "companyName":"Dave & Busters", 
		"pictureURL" : "../Data/{445B7B03-AFFE-42C0-9BBE-42926900478F}.jpg","emailAddress":"Track time - 7:22"},
		
		];

		return(customers);


	};


}
;







