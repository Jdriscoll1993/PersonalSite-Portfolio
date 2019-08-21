$.ajax({
    url: "data/techs.json"
  }).done(techs)
    .fail(function (error) {
      console.log("error", error);
    });
  
  function techs(list) {
    let data = list.techs;
    data.forEach(function (item) {
      document.getElementById("techs").innerHTML +=
        `<div class="col-sm-2 technologies">
           <center><a href="${item.link}" target="_blank"><img class="techs" src="${item.image}" alt="${item.name}" data-toggle="tooltip" data-placement="top" title="${item.name}"></a><br>
           </center>
        </div>`;
    });
  };