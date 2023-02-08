$(function () {
  // !Main-Page scripts:
  if (document.body.classList.contains('main-page')) {
    //!Vars
    const burger = document?.querySelector('[data-burger]');
    const navbar = document?.querySelector('[data-navbar]');
    const body = document.body;
    const navItems = document?.querySelectorAll('.nav__list-item');
    const header = document?.querySelector('.header');
    const headerHeight = header?.offsetHeight;
    document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

    burger?.addEventListener('click', function () {
      body.classList.toggle('stop-scroll');
      burger?.classList.toggle('burger--active');
      navbar?.classList.toggle('navbar--visible');
    });

    navItems.forEach(function (e) {
      e.addEventListener('click', function () {
        body.classList.remove('stop-scroll');
        burger?.classList.remove('burger--active');
        navbar?.classList.remove('navbar--visible');
      });
    });

    //!Slick-slider
    $('.circles__slider--ballet').slick({
      //!Main settings
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

    $('.circles__slider-first').slick({
      //!Main settings
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });


    $('.circles__slider-second').slick({
      //!Main settings
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });


    $('.circles__slider-third').slick({
      //!Main settings
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

    // !Show-more
    // !Vars
    const showMore = document.querySelector('.circles__show-more');
    const circlesLenght = document.querySelectorAll('.circles__item').length;
    let items = 3;

    showMore.addEventListener('click', function () {
      items += 3;
      const array = Array.from(document.querySelector('.circles').children);
      const visibleItems = array.slice(0, items);

      visibleItems.forEach(el => {
        el.classList.add('is-visible');
        el.style.maxHeight = el.scrollHeight + 'px';
      });

      if (visibleItems.length === circlesLenght) {
        showMore.style.display = 'none';
      };
    });

    //!Select
    //! NodeList.prototype.forEach() polyfill ( IE 11)
    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
          callback.call(thisArg, this[i], i, this);
        }
      };
    };

    //!Select 
    document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
      //!Vars
      const dropDownButton = dropDownWrapper.querySelector('.dropdown__button');
      const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
      const dropDownListItem = dropDownList.querySelectorAll('.dropdown__list-item');
      const dropDownArrow = dropDownWrapper.querySelector('.dropdown__arrow')


      //!Looking for the button
      dropDownButton.addEventListener('click', function () {
        //!Swicth in;(none/block)
        dropDownList.classList.toggle('dropdown__list--visible');
        //!Turning the arrow 180 degrees
        dropDownArrow.classList.toggle('dropdown__arrow--open');
      });

      //!List Item
      dropDownListItem.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
          e.stopPropagation()
          //!Closing the drop-down menu by clicking on a list item
          dropDownList.classList.remove('dropdown__list--visible');
          //!Turning the arrow 180 degrees
          dropDownArrow.classList.toggle('dropdown__arrow--open');
        });
      });

      //!Click outside dropdown. Close dropdown
      document.addEventListener('click', function (e) {
        if (e.target !== dropDownButton) {
          dropDownList.classList.remove('dropdown__list--visible');
          dropDownArrow.classList.remove('dropdown__arrow--open');
        };
      });

      //!Closing Dropdown by buttons
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab' || e.key === 'Escape') {
          dropDownList.classList.remove('dropdown__list--visible')
        };
      });
    });

    // !Accordion
    //!Vars
    const accordions = document.querySelectorAll('[data-accordion]');

    accordions.forEach(function (item) {
      item.addEventListener('click', function () {
        const control = this.querySelector('[data-control]');
        const content = this.querySelector('[data-content]');
        this.classList.toggle('open');

        //!Screen reader
        if (this.classList.contains('open')) {
          control.setAttribute('arria-expanded', true);
          content.setAttribute('arria-hidden', false);
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          control.setAttribute('arria-expanded', false);
          content.setAttribute('arria-hidden', true);
          content.style.maxHeight = null;
        }
      })
    })

    //!Dropdown
    //!Vars
    const menuBtns = document.querySelectorAll('[data-menubtn]');
    const drops = document.querySelectorAll('[data-dropdown]');

    menuBtns.forEach(function (item) {
      item.addEventListener('click', function () {
        let currentBtn = this;
        let dropdown = currentBtn.closest('.menu__item').querySelector('.dropdown');
        menuBtns.forEach(function (item) {
          if (item !== currentBtn) {
            item.classList.remove('menu__btn--active');
          }
        });

        drops.forEach(function (item) {
          if (item !== dropdown) {
            item.classList.remove('dropdown--active');
          }
        });
        dropdown.classList.toggle('dropdown--active');
        currentBtn.classList.toggle('menu__btn--active');
      });
    });
    
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.menu')) {
        menuBtns.forEach(function (item) {
          item.classList.remove('menu__btn--active');
        });

        drops.forEach(function (item) {
          item.classList.remove('dropdown--active');
        });
      };
    });
  }

  if (window.innerWidth > 770) {
    // !Anchors
    $('.nav__link').on('click', function (event) {
      event.stopPropagation();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top + "px"
      }, {
        duration: 1000,
        easing: "swing",
      });
      return false;
    });

    $('.header__content-btn').on('click', function () {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top + "px"
      }, {
        duration: 1000,
        easing: "swing",
      });
      return false;
    });
  };
})
