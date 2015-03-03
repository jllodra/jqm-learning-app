// El primer fitxer javascript que feim

$(document).on("pagecreate", "#pageone", function(){
  console.log("PAGECREATE pageone");
});

$(document).on("pagecreate", "#pagetwo", function(){
  console.log("PAGECREATE pagetwo");
});

$(document).on("pagecontainerbeforeshow", function(){
  console.log("PAGECONTAINERBEFORESHOW change page");
});

$(document).on("pagecontainershow", function(){
  console.log("PAGECONTAINERSHOW change page");
});