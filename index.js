$(document).ready(function (){
  Handlebars.registerPartial('authorDetailsPartial', $('#author-details-partial')[0].innerHTML);

});

function searchRepositories(){
  const termsHTML = $('#searchTerms')[0].value;
  const searchTerms = termsHTML.split(' ').join('+');
  const req = $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, function(response){
    //put response through templates, pass off to results div
    const templateHTML = $('#repositories-template')[0].innerHTML;
    const template = Handlebars.compile(templateHTML);
    const repositories = template(response);
    $('#results').html(repositories);
  });
};

function showCommits(){

};
