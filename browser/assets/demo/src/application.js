/*!
* JavaScript for Bootstrap's docs (https://getbootstrap.com)
* Copyright 2011-2017 The Bootstrap Authors
* Copyright 2011-2017 Twitter, Inc.
* Licensed under the Creative Commons Attribution 3.0 Unported License. For
* details, see https://creativecommons.org/licenses/by/3.0/.
*/(function($){'use strict';$(function(){$('.bd-example-indeterminate [type="checkbox"]').prop('indeterminate',true);$('.tooltip-demo').tooltip({selector:'[data-toggle="tooltip"]',container:'body',});$('[data-toggle="popover"]').popover();$('.tooltip-test').tooltip();$('.popover-test').popover();$('.bd-example-indeterminate [type="checkbox"]').prop('indeterminate',true);$('.bd-content [href="#"]').click(function(e){e.preventDefault();});$('#exampleModal').on('show.bs.modal',function(event){var $button=$(event.relatedTarget);var recipient=$button.data('whatever');var $modal=$(this);$modal.find('.modal-title').text('New message to '+recipient);$modal.find('.modal-body input').val(recipient);});$('.bd-toggle-animated-progress').on('click',function(){$(this).siblings('.progress').find('.progress-bar-striped').toggleClass('progress-bar-animated');});$('.highlight').each(function(){var btnHtml='<div class="bd-clipboard"><button class="btn-clipboard" title="Copy to clipboard">Copy</button></div>';$(this).before(btnHtml);$('.btn-clipboard').tooltip().on('mouseleave',function(){$(this).tooltip('hide');});});var clipboard=new Clipboard('.btn-clipboard',{target:function(trigger){return trigger.parentNode.nextElementSibling;},});clipboard.on('success',function(e){$(e.trigger).attr('title','Copied!').tooltip('_fixTitle').tooltip('show').attr('title','Copy to clipboard').tooltip('_fixTitle');e.clearSelection();});clipboard.on('error',function(e){var modifierKey=/Mac/i.test(navigator.userAgent)?'\u2318':'Ctrl-';var fallbackMsg='Press '+modifierKey+'C to copy';$(e.trigger).attr('title',fallbackMsg).tooltip('_fixTitle').tooltip('show').attr('title','Copy to clipboard').tooltip('_fixTitle');});anchors.options={icon:'#',};anchors.add('.bd-content > h2, .bd-content > h3, .bd-content > h4, .bd-content > h5');$('.bd-content > h2, .bd-content > h3, .bd-content > h4, .bd-content > h5').wrapInner('<div></div>');});})(jQuery);