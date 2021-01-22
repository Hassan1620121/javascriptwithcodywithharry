console.log("this is createcvscreener tutorial js");
//Data is an array of objects which contains information about the candidates
const data = [
  {
    nam: "Hassan",
    age: 18,
    city: "Kolkata",
    languages: "python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/66.jpg",
  },
  {
    nam: "Asad",
    age: 18,
    city: "Kolkata",
    languages: "python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
  },
  {
    nam: "Saad",
    age: 18,
    city: "Kolkata",
    languages: "python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/73.jpg",
  },
  {
    nam: "Hamza",
    age: 18,
    city: "Kolkata",
    languages: "python",
    framework: "Angular",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    nam: "Ashwariya Rai",
    age: 18,
    city: "Kolkata",
    languages: "python",
    framework: "React",
    image: "https://randomuser.me/api/portraits/women/78.jpg",
  },
  {
    nam: "Aslam",
    age: 18,
    city: "Islamabad",
    languages: "python",
    framework: "Laravel",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
  },

  {
    nam: "Shehzad",
    age: 18,
    city: "Islamabad",
    languages: "python",
    framework: "Flask",
    image: "https://randomuser.me/api/portraits/women/80.jpg",
  },
];

//CV Iterator
function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
const candidates = cvIterator(data);

nextCV();

//Button Listener for next button
const next = document.getElementById("next");
next.addEventListener("click", nextCV);

function nextCV() {
  const CurrentCandidate = candidates.next().value;
  if (CurrentCandidate != undefined) {
    let image = document.getElementById("image");
    let profile = document.getElementById("profile");
    image.innerHTML = `<img src='${CurrentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${CurrentCandidate.nam}</li>
    <li class="list-group-item">${CurrentCandidate.age} years old</</li>
    <li class="list-group-item">Lives in ${CurrentCandidate.city}</</li>
    <li class="list-group-item">Primarily works on ${CurrentCandidate.language}</</li>
    <li class="list-group-item">uses ${CurrentCandidate.framework}</</li>
  </ul>`;
  }
  else{
      alert('End of Candidate Applications');
      window.location.reload();
  }
}
