const PORTFOLIO_COLUMN_SELECTOR = '.portfolio-column';
/* Parse a query string */
function parse_query_string(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]);
    /* If first entry with this name */
    if (typeof query_string[key] === "undefined") {
      query_string[key] = decodeURIComponent(value);
      /* If second entry with this name */
    } else if (typeof query_string[key] === "string") {
      var arr = [query_string[key], decodeURIComponent(value)];
      query_string[key] = arr;
      /* If third or later entry with this name */
    } else {
      query_string[key].push(decodeURIComponent(value));
    }
  }
  return query_string;
};
/* Parse int using RegEx */
function paraseIntFromData(data) {
  return parseInt(data.match(/\d+/g));
};
/* Returns an array where index is the unique identifier, value is the name */
function pullDataFromDropdown(selector) {
  var $dropdowns = $(selector);
  var array = new Array($dropdowns.length);
  $dropdowns.each(function() {
    array[paraseIntFromData($(this).attr('data-choice'))] = $(this).text();
  });
  return array;
};

/* Hides/reveals a single action button in the modal, assigns URL if present */
function showHideModalButton($modal, id, url) {
  var $button = $modal.find(id);
  if (!url) {
    $button.hide();
    return;
  }
  $button.show().attr('href', url);
};

/* Reveal the modal with a specific work */
function revealModalWith(work) {
  var $modal = $('.modal').first();
  $modal.find('figure > img').attr('src', work.banner);
  $modal.find('h1').first().text(work.title);
  $modal.find('h2').first().text(work.subtitle);
  $modal.find('.portfolio-story').html(work.content);
  /* Handle buttons */
  showHideModalButton($modal, '#modal-button-play', work.urlPlay);
  showHideModalButton($modal, '#modal-button-read', work.urlRead);
  showHideModalButton($modal, '#modal-button-visit', work.urlVisit);
  showHideModalButton($modal, '#modal-button-install-android', work.urlAndroidInstall);
  showHideModalButton($modal, '#modal-button-install-ios', work.urliOSInstall);
  showHideModalButton($modal, '#modal-button-install-chrome', work.urlChromeInstall);
  showHideModalButton($modal, '#modal-button-download-pdf', work.urlDownloadPDF);
  showHideModalButton($modal, '#modal-button-download-ppt', work.urlDownloadPPT);
  showHideModalButton($modal, '#modal-button-source', work.urlSource);
  showHideModalButton($modal, '#modal-button-product-hunt', work.urlProductHunt);

  /* Convert roles to single string */
  var roleArray = [];
  work.roles.forEach(function(current, index, array) {
    roleArray.push(window.allRoles[current]);
  });
  roleArray.sort();

  /* Convert Types to single string */
  var typesArray = [];
  work.types.forEach(function(current, index, array) {
    typesArray.push(window.allTypes[current]);
  });
  typesArray.sort();

  $modal.find('.portfolio-details-client').text(window.allClients[work.client]);
  $modal.find('.portfolio-details-roles').text(` ${roleArray.join(', ')}`);
  $modal.find('.portfolio-details-types').text(` ${typesArray.join(', ')}`);
  $modal.find(`.portfolio-story [data-resource='work']`).click(function() {
    $modal.toggleClass('is-active');
    revealModalWith(window.allWorks[parseInt($(this).attr('data-work'))]);
  });
  $modal.toggleClass('is-active');
  window.activeWork = work.index;
  pushNewURL();
};

/* Use current filters to create a new URL state */
function pushNewURL() {
  var newUrl = '?';
  if (window.filteredRole > -1) {
    newUrl += '&role=' + window.filteredRole;
  }
  if (window.filteredClient > -1) {
    newUrl += '&client=' + window.filteredClient;
  }
  if (window.filteredTopic > -1) {
    newUrl += '&topic=' + window.filteredTopic;
  }
  if (window.filteredType > -1) {
    newUrl += '&type=' + window.filteredType;
  }
  if (window.filteredWork > -1) {
    newUrl += '&work=' + window.filteredWork;
  }
  if (window.activeWork > -1) {
    newUrl += '&active=' + window.activeWork;
  }
  window.history.pushState('', '', newUrl);
};

/* Uses the current URL to update stored filters */
function initFromURL() {
  var query = window.location.search.substring(1);
  var paramsFromURL = parse_query_string(query);
  if (paramsFromURL.role && paramsFromURL.role < window.allRoles.length) {
    window.filteredRole = Math.max(-1, paramsFromURL.role);
  }
  if (paramsFromURL.topic && paramsFromURL.topic < window.allTopics.length) {
    window.filteredTopic = Math.max(-1, paramsFromURL.topic);
  }
  if (paramsFromURL.client && paramsFromURL.client < window.allClients.length) {
    window.filteredClient = Math.max(-1, paramsFromURL.client);
  }
  if (paramsFromURL.type && paramsFromURL.type < window.allTypes.length) {
    window.filteredType = Math.max(-1, paramsFromURL.type);
  }
  if (paramsFromURL.work && paramsFromURL.work < window.allWorks.length) {
    window.filteredWork = Math.max(-1, paramsFromURL.work);
  }
  if (paramsFromURL.active && paramsFromURL.active < window.allWorks.length) {
    window.activeWork = Math.max(-1, paramsFromURL.active);
  }
  updateActiveDropdownItems();
  revealClearFilterButtonIfNecessary();
  filterWorks();

  if (window.activeWork > -1) {
    revealModalWith(window.allWorks[window.activeWork]);
  }
};

function updateActiveDropdownItems() {
  if (window.filteredRole < 0) {
    $(`[data-type='role']`).removeClass('is-active');
  } else if (window.filteredRole < window.allRoles.length) {
    $(`[data-type='role'][data-choice*='${window.filteredRole.toString().padStart(3,'0')}']`).addClass('is-active');
  }
  if (window.filteredTopic < 0) {
    $(`[data-type='topic']`).removeClass('is-active');
  } else if (window.filteredTopic < window.allTopics.length) {
    $(`[data-type='topic'][data-choice*='${window.filteredTopic.toString().padStart(3,'0')}']`).addClass('is-active');
  }
  if (window.filteredType < 0) {
    $(`[data-type='type']`).removeClass('is-active');
  } else if (window.filteredType < window.allTypes.length) {
    $(`[data-type='type'][data-choice*='${window.filteredType.toString().padStart(3,'0')}']`).addClass('is-active');
  }
  if (window.filteredClient < 0) {
    $(`[data-type='client']`).removeClass('is-active');
  } else if (window.filteredClient < window.allClients.length) {
    $(`[data-type='client'][data-choice*='${window.filteredClient.toString().padStart(3,'0')}']`).addClass('is-active');
  }
  updateActiveDropdownButtons();
}

function updateActiveDropdownButtons() {
  var $span = $(`#dropdown-roles span[data-preset]`);
  if (window.filteredRole > -1 && window.filteredRole < window.allRoles.length) {
    $span.text(`${$span.attr('data-preset')}: ${window.allRoles[window.filteredRole]}`);
  } else {
    $span.text($span.attr('data-preset'));
  }
  $span = $(`#dropdown-clients span[data-preset]`);
  if (window.filteredClient > -1 && window.filteredClient < window.allClients.length) {
    $span.text(`${$span.attr('data-preset')}: ${window.allClients[window.filteredClient]}`);
  } else {
    $span.text($span.attr('data-preset'));
  }
  $span = $(`#dropdown-topics span[data-preset]`);
  if (window.filteredTopic > -1 && window.filteredTopic < window.allTopics.length) {
    $span.text(`${$span.attr('data-preset')}: ${window.allTopics[window.filteredTopic]}`);
  } else {
    $span.text($span.attr('data-preset'));
  }
  $span = $(`#dropdown-types span[data-preset]`);
  if (window.filteredType > -1 && window.filteredType < window.allTypes.length) {
    $span.text(`${$span.attr('data-preset')}: ${window.allTypes[window.filteredType]}`);
  } else {
    $span.text($span.attr('data-preset'));
  }
}

function revealClearFilterButtonIfNecessary() {
  if (window.filteredRole > -1 || window.filteredWork > -1 ||
     window.filteredTopic > -1 || window.filteredClient > -1 ||
     window.filteredType > -1) {
    var $clearFilterButton = $('#clear-filter-button');
    /* Reveal it, then hide it with jQuery, then fade it in baby. Yes, thsi works */
    $clearFilterButton.removeClass('is-invisible').hide(0, function() {$clearFilterButton.fadeIn()});
    return;
  }
}

/* Pulled from window.filteredRole, ... */
function filterWorks() {
  if (window.filteredWork < 0 && window.filteredRole < 0 &&
     window.filteredTopic < 0 && window.filteredClient < 0 &&
     window.filteredType < 0) {
    /* Nothing to hide */
    $(PORTFOLIO_COLUMN_SELECTOR).show();
    return;
  }
  /* Hide all at first */
  $(PORTFOLIO_COLUMN_SELECTOR).hide();

  /* If a filtered work is present, it takes precedent */
  if (window.filteredWork > -1 && window.filteredWork < window.allWorks.length) {
    var idToFilter = window.allWorks[window.filteredWork].id;
    $(`${PORTFOLIO_COLUMN_SELECTOR}[data-id*='${idToFilter}']`).fadeIn();
    return;
  }

  /* Filter by the remainder */
  var query = '';
  if (window.filteredRole > -1 && window.filteredRole < window.allRoles.length) {
    query += `[data-roles*='${window.filteredRole.toString().padStart(3, '0')}']`;
  }
  if (window.filteredClient > -1 && window.filteredClient < window.allClients.length) {
    query += `[data-client*='${window.filteredClient.toString().padStart(3, '0')}']`;
  }
  if (window.filteredTopic > -1 && window.filteredTopic < window.allTopics.length) {
    query += `[data-topics*='${window.filteredTopic.toString().padStart(3, '0')}']`;
  }
  if (window.filteredType > -1 && window.filteredType < window.allTypes.length) {
    query += `[data-types*='${window.filteredType.toString().padStart(3, '0')}']`;
  }

  if (query !== '') {
    $(query).fadeIn();
    return;
  }

  /* If we make it down here, the filters are bad, reveal everything */
  $(PORTFOLIO_COLUMN_SELECTOR).show();
};

var initPortfolio = function() {
  /* Let's get filters working */
  window.filteredRole = -1;
  window.filteredClient = -1;
  window.filteredTopic = -1;
  window.filteredWork = -1;
  window.filteredType = -1;
  window.activeWork = -1;

  /* Load all roles, clients, and topics into objects */
  window.allRoles = pullDataFromDropdown('#dropdown-roles a.dropdown-item');
  window.allClients = pullDataFromDropdown('#dropdown-clients a.dropdown-item');
  window.allTopics = pullDataFromDropdown('#dropdown-topics a.dropdown-item');
  window.allTypes = pullDataFromDropdown('#dropdown-types a.dropdown-item');

  /* Drop-down filter activate/deactivate */
  $('.dropdown button').on('click', function(e) {
    var $activeDropdown = $('.dropdown.is-active').first();
    if ($activeDropdown[0] && $(this)[0] != $activeDropdown.find('button').first()[0]) {
      $activeDropdown.removeClass('is-active');
    }
    $(this).parents('.dropdown').toggleClass('is-active');
    e.stopPropagation();
  });

  /* Click outside closes all dropdowns */
  $('html').on('click', function(e) {
    $('.dropdown.is-active').toggleClass('is-active');
  });

  /* Browji direct link */
  $('a.browji-link').click(function() {
    revealModalWith(window.allWorks[1]);
  });

  /* Handle all dropdown item selections */
  $('a.dropdown-item').click(function() {
    /* Deactivate all dropdown item peers */
    $(this).siblings().removeClass('is-active');
    /* Set current selection active */
    $(this).addClass('is-active');
    /* Discover type */
    var type = $(this).attr('data-type');
    if (type === 'role') {
      window.filteredRole = paraseIntFromData($(this).attr('data-choice'));
    } else if (type === 'client') {
      window.filteredClient = paraseIntFromData($(this).attr('data-choice'));
    } else if (type === 'type') {
      window.filteredType = paraseIntFromData($(this).attr('data-choice'));
    } else {
      window.filteredTopic = paraseIntFromData($(this).attr('data-choice'));
    }
    pushNewURL();
    updateActiveDropdownButtons();
    revealClearFilterButtonIfNecessary();
    filterWorks();
  });

  var $clearFilterButton = $('#clear-filter-button');
  $clearFilterButton.addClass('is-invisible');
  /* Clear the filter */
  $clearFilterButton.click(function() {
    window.filteredRole = -1;
    window.filteredClient = -1;
    window.filteredTopic = -1;
    window.filteredWork = -1;
    window.filteredType = -1;

    pushNewURL();
    updateActiveDropdownItems();
    filterWorks();
    $(this).fadeOut(function() {
      $(this).addClass('is-invisible');
      $(this).show();
    });
  });

  /* Load all works */
  var $workEntries = $(PORTFOLIO_COLUMN_SELECTOR);
  window.allWorks = new Array($workEntries.length);
  $workEntries.each(function() {
    var work = {};
    var $work = $(this);
    work.id = $work.attr('data-id');
    work.index = parseInt(work.id.match(/\d+/g));
    work.title = $work.attr('data-title');
    work.subtitle = $work.attr('data-subtitle');
    work.content = $work.attr('data-output');
    work.banner = $work.attr('data-banner');
    work.client = parseInt($work.attr('data-client'));
    work.roles = $work.attr('data-roles').split(',');
    work.roles.forEach(function(current, index, arr) {
      arr[index] = parseInt(current);
    });
    work.types = $work.attr('data-types').split(',');
    work.types.forEach(function(current, index, arr) {
      arr[index] = parseInt(current);
    });
    work.urlPlay = $work.attr('data-url-play');
    work.urlRead = $work.attr('data-url-read');
    work.urlVisit = $work.attr('data-url-visit');
    work.urlProductHunt = $work.attr('data-url-product-hunt');
    work.urlAndroidInstall = $work.attr('data-url-android-install');
    work.urliOSInstall = $work.attr('data-url-ios-install');
    work.urlChromeInstall = $work.attr('data-url-chrome-install');
    work.urlDownloadPDF = $work.attr('data-url-download-pdf');
    work.urlDownloadPPT = $work.attr('data-url-download-ppt');
    work.urlSource = $work.attr('data-url-source');
    window.allWorks[work.index] = work;
  });

  $('.modal-background, .modal-close').click(function() {
    $(this).parent().toggleClass('is-active');
    window.activeWork = -1;
    pushNewURL();
  });

  /* On Click for each work */
  $workEntries.click(function() {
    var work = window.allWorks[paraseIntFromData($(this).attr('data-id'))];
    revealModalWith(work);
  });

  /* Run this once per page load to incorporate a pre-filtered URL */
  initFromURL();
}

window.addDependencyCallback(initPortfolio);
