function CustomerViewModel() {

   var self = this;

   // Properties
   self.customers = ko.observableArray();
   self.currentContext = ko.observable("home");

   // For simplicity sake, we'll expose
   // the customer in context as separate fields	
   self.currentCustomerFullName = ko.observable("");
   self.currentCustomerEmailAddress = ko.observable("");
   self.currentCustomerPictureURL = ko.observable("");

   // Operations
   self.loadCustomers = function () {

      self.customers.removeAll();
      var dataService = new customerDataService();
      var customers = dataService.getCustomers();

      for (var i = 0; i < customers.length; i++) {

         var customer = new Customer(
         customers[i].id,
         customers[i].firstName,
         customers[i].lastName,
         customers[i].companyName,
         customers[i].emailAddress,
         customers[i].pictureURL);

         self.customers.push(customer);
      }

   };

   self.viewAll = function () {
      self.currentContext("all");
      
   }

   self.reset = function () {

      self.currentContext("home");

   };

   self.setCurrentCustomer = function () {

      self.currentContext("detail");

      self.currentCustomer = this;
      self.currentCustomerFullName(this.fullName());
      self.currentCustomerEmailAddress(this.emailAddress());
      self.currentCustomerPictureURL(this.pictureURL());

   };

   self.loadCustomers();

} // CustomerViewModel
;