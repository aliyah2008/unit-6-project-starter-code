
// Declare your genre arrays here

let action=["https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg", "https://ntvb.tmsimg.com/assets/p18078200_b_h8_ae.jpg?w=960&h=540", "https://play-lh.googleusercontent.com/u7kZycaF6HaQ4g2JeofDr7X22L2ylaLz58LaGhfJlDtc1woithZvvtB--LocqnhfiHtjjFgxJrz8qZQhA7c", "https://m.media-amazon.com/images/M/MV5BODgzYmFkZjAtYjhmNC00NDdkLTk4NGYtNDdiODVlNmE3ODkyXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg"];

let romance=["https://m.media-amazon.com/images/I/91I8ElmqRZL._AC_UF894,1000_QL80_.jpg", "https://m.media-amazon.com/images/M/MV5BYjg0OTY5N2UtZDljZS00NDc2LWI1MDAtMDdmN2Q3OTNkMjA1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BOTgxN2VhNTktY2NhNC00ODIxLWFjMjUtNTUzYWZmNTcyYmE0XkEyXkFqcGdeQXVyNDI3NjU1NzQ@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BNjk4MDdhODctMmFhYi00ZTNhLThlN2UtN2NhZGY0OGFlMWEwXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg"];

let drama=["https://flxt.tmsimg.com/assets/p15455205_b_h9_ab.jpg", "https://cdn1.edgedatg.com/aws/v2/abc/AMillionLittleThings/showimages/4af6b24aedb993f369cdf5424b1fd74e/1200x676-Q75_4af6b24aedb993f369cdf5424b1fd74e.jpg", "https://img3.hulu.com/user/v3/artwork/0ee8a395-3270-46ef-9ab0-c200f5f9f89d?base_image_bucket_name=image_manager&base_image=0c4adaa1-f24d-4a02-a781-e7323c140a77&region=US&format=jpeg&size=952x536", "https://resizing.flixster.com/0xxuABVVuzJrUT130WFHKE-irEg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzUyMTFhOTktZTU4Ni00ODkyLWJlYjQtZTgxYTllZmU2OGM0LmpwZw=="];




// Make sure to declare your HTML elements as variables! 
let shows = document.querySelector(".shows").value;


// Submit Button 
let submitButton = document.querySelector(".submit-button");
submitButton.onclick = function() {
  let genreInput = document.querySelector(".get-suggestions").value;
  if(genreInput === "action") {
  for (let show of action) {
    shows.insertAdjacentHTML("afterbeign", + "<img src=" + show + "/>");
}
    
 } else if (genreInput === "romance") 
for (let show of action) {
  shows.insertAdjacentHTML("afterbegin", "<img src=" + show + "/>");
}

  } else if (genreInput === "drama") 
for (let show of drama ) {
  shows.insertAdjacentHTML("afterbegin", "<img src=" + show + "/>");
}

let suggestionButton = document.querySelector(".suggestion-button");
suggestionButton.onclick = function() {
  let suggestion = document.querySelector(".give-suggestions").value;
  shows.append("Thank you for the suggestion!");
  action.push(suggestion);
  drama.push(suggestion);
  romance.push(suggestion);
  
};