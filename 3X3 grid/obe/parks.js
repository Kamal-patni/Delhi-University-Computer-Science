var parks = [ 
    {name:"Jim Corbett National Park", state:"Uttrakhand", speciality: 
   "Tigers"}, 
    {name:"Kaziranga National Park", state:"Assam", speciality: "Rhinos"}, 
    {name: "Asola Bhatti Wildlife Sanctury", state:"Delhi", speciality: "Birds"}, 
    {name: "Gir National Park", state: "Gujrat", speciality: "Lions"}]; 
   function display(){ 
    var index = (document.getElementById("index").value); 
    var propertyname = document.getElementById("property_name").value; 
    document.getElementById('d1').textContent = 'Property Value is: ' + 
   parks[index][propertyname]; 
   }