'use strict';

document.addEventListener('DOMContentLoaded', function () {

  var previewAlert1 = new alertify('Hello World!..');

  var previewAlert2 = new alertify({
    title: 'Welcome',
    text: 'You have new notification from alertify'
  });

  var previewAlert3 = new alertify({
    title: 'Welcome',
    text: 'You have new notification from alertify',
    showSuccessbtn: false
  })

  var previewAlert4 = new alertify({
    title: 'Welcome',
    text: 'You have new notification from alertify',
    showCancelbtn: true
  })

  function previewAlertOnType(type, title, text) {
    var alert = new alertify({
      title: title,
      text: text,
      type: type
    })

    alert.alert();
  }

  function previewAlertOnAnime(type, anime) {

    if (type === 'openBy')
      var alert = new alertify({
        title: 'Welcome',
        text: 'You have new notification from alertify',
        openBy: anime
      })
    else
      var alert = new alertify({
        title: 'Welcome',
        text: 'You have new notification from alertify',
        closeBy: anime
      })

    alert.alert();
  }

  function previewAlertByPosition(position) {
    var alert = new alertify({
      title: 'Welcome',
      text: 'You have new notification from alertify',
      position: position,
    })

    alert.alert();
  }

  document.querySelector('#preview-intro').addEventListener('click', function () {
    previewAlertOnType('success', '', 'Payment Successfull!');
  });

  document.querySelector('#preview-1').addEventListener('click', function () {
    previewAlert1.alert();
  });

  document.querySelector('#preview-2').addEventListener('click', function () {
    previewAlert2.alert();
  });

  document.querySelector('#preview-3').addEventListener('click', function () {
    previewAlert1.alert();
  });

  document.querySelector('#preview-4').addEventListener('click', function () {
    previewAlertOnType('success', 'Success', 'File posted successfully.');
  });

  document.querySelector('#preview-5').addEventListener('click', function () {
    previewAlertOnType('info', 'New Notification', 'You have new notification on messenger.');
  });

  document.querySelector('#preview-6').addEventListener('click', function () {
    previewAlertOnType('warning', 'Storage Full', 'Storage is running out. Free up storage for smooth perfomance.');
  });

  document.querySelector('#preview-7').addEventListener('click', function () {
    previewAlertOnType('danger', 'Virus Threat', 'Your device is not secure.');
  });

  document.querySelector('#preview-8').addEventListener('click', function () {
    previewAlert3.alert();
  });

  document.querySelector('#preview-9').addEventListener('click', function () {
    previewAlert2.alert();
  });

  document.querySelector('#preview-10').addEventListener('click', function () {
    previewAlert4.alert();
  });

  document.querySelector('#preview-11').addEventListener('click', function () {
    previewAlert2.alert();
  });

  document.querySelector('#preview-12').addEventListener('click', function () {
    previewAlertOnAnime('openBy', 'SlideUpIn');
  });

  document.querySelector('#preview-13').addEventListener('click', function () {
    previewAlertOnAnime('openBy', 'SlideDownIn');
  });

  document.querySelector('#preview-14').addEventListener('click', function () {
    previewAlertOnAnime('openBy', 'SlideLeftIn');
  });

  document.querySelector('#preview-15').addEventListener('click', function () {
    previewAlertOnAnime('openBy', 'SlideRightIn');
  });

  document.querySelector('#preview-16').addEventListener('click', function () {
    previewAlertOnAnime('closeBy', 'SlideUpOut');
  });

  document.querySelector('#preview-17').addEventListener('click', function () {
    previewAlertOnAnime('closeBy', 'SlideDownOut');
  });

  document.querySelector('#preview-18').addEventListener('click', function () {
    previewAlertOnAnime('closeBy', 'SlideLeftOut');
  });

  document.querySelector('#preview-19').addEventListener('click', function () {
    previewAlertOnAnime('closeBy', 'SlideRightOut');
  });

  document.querySelector('#preview-20').addEventListener('click', function () {
    previewAlertByPosition('top');
  });

  document.querySelector('#preview-21').addEventListener('click', function () {
    previewAlertByPosition('center');
  });

  document.querySelector('#preview-22').addEventListener('click', function () {
    previewAlertByPosition('bottom');
  });

});