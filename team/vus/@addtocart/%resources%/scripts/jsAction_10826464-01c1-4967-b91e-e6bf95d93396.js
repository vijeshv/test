// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
    var today = new Date();
      var oneDay = 1000 * 60 * 60 * 24; // 24H in ms
      var expires = 7 * oneDay;  
      var expires_date = new Date(today.getTime()+expires);
    //var cookie = "username=John; expires=" + expires_date.toGMTString() +"; \path=/default.aspx";
      
    //  var cookie= cartAbandon=0, esw.LanguageIsoCode=en, eswInternationalUser=true, esw.location=%7B%22country%22%3A%7B%22iso_code%22%3A%22IN%22%7D%7D, esw.currency=INR, eSw.Landing.Played=true, __qca=P0-1008301496-1510836647198, optimizelySegments=%7B%22312466352%22%3A%22gc%22%2C%22312488296%22%3A%22false%22%2C%22312517250%22%3A%22none%22%2C%22312527282%22%3A%22direct%22%2C%222205511171%22%3A%22true%22%2C%227030481274%22%3A%22true%22%7D, optimizelyBuckets=%7B%7D, optimizelyEndUserId=oeu1510836620552r0.7293605928257014, dl_1st_party_cookie=www.countryroad.com+ee45c8ba-2037-46ae-81fe-11a1b0bf3007, dl_session_id=knxhlynbo1, __ar_v4=XX4DJP7KJNEENMDB65WE7H%3A20171116%3A4%7CSGLHVBDM5RDKLDII6RFYKW%3A20171116%3A4%7CT4WP5WCK3JGFXL72UPGLGT%3A20171116%3A4, esw.SessionId=qlzlqcimxfffhg3r1v2b1uow, loggedIn=False, countryCode=IX, SLI=cartCount=1, countryCode=IX, loggedIn=False, _ga=GA1.2.1712301987.1510836627, _gid=GA1.2.1264464851.1510836627, _gat_UA-3785867-7=1
    var cookie=" cartAbandon=0, esw.LanguageIsoCode=en, eswInternationalUser=true, esw.location=%7B%22country%22%3A%7B%22iso_code%22%3A%22IN%22%7D%7D, esw.currency=INR, eSw.Landing.Played=true, __qca=P0-1008301496-1510836647198, optimizelySegments=%7B%22312466352%22%3A%22gc%22%2C%22312488296%22%3A%22false%22%2C%22312517250%22%3A%22none%22%2C%22312527282%22%3A%22direct%22%2C%222205511171%22%3A%22true%22%2C%227030481274%22%3A%22true%22%7D, optimizelyBuckets=%7B%7D, optimizelyEndUserId=oeu1510836620552r0.7293605928257014, dl_1st_party_cookie=www.countryroad.com+ee45c8ba-2037-46ae-81fe-11a1b0bf3007, dl_session_id=knxhlynbo1, __ar_v4=XX4DJP7KJNEENMDB65WE7H%3A20171116%3A4%7CSGLHVBDM5RDKLDII6RFYKW%3A20171116%3A4%7CT4WP5WCK3JGFXL72UPGLGT%3A20171116%3A4, esw.SessionId=qlzlqcimxfffhg3r1v2b1uow, loggedIn=False, countryCode=IX, SLI=cartCount=1, countryCode=IX, loggedIn=False, _ga=GA1.2.1712301987.1510836627, _gid=GA1.2.1264464851.1510836627, _gat_UA-3785867-7=1; expires=" + expires_date.toGMTString() +"; \path=/default.aspx";
        context.currentVU.setCookieForServer("www.countryroad.com",cookie);