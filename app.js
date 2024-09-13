(() => {
  try {
    const sliderImg = document.querySelector('.slider_img')
    const sliderBtnR = document.getElementById('sliderBtnRight')
    const sliderBtnL = document.getElementById('sliderBtnLeft')
    const sliderPlace = document.getElementById('slider-img-place')
    const sliderText1 = document.getElementById('slider_text1')
    const sliderText2 = document.getElementById('slider_text2')
    let imgWidth = sliderImg.clientWidth;
    
    
    sliderBtnL.addEventListener('click', function(){
      sliderPlace.style.transform = `translateX(0)`
      sliderText2.style.display = 'none'
      sliderText1.style.display = 'flex'
    })
    
    sliderBtnR.addEventListener('click', function(){
      sliderPlace.style.transform = `translateX(calc(${-imgWidth}px))`
      sliderText1.style.display = 'none'
      sliderText2.style.display = 'flex'
    })
  } catch(e) {}
})();

(() => {
  try {
    const seeMoreBtn1 = document.getElementById('seeMoreBtn1')
    const seeMoreBtn2 = document.getElementById('seeMoreBtn2')
    const seeMoreBtn3 = document.getElementById('seeMoreBtn3')
    const seeMoreText1 = document.getElementById('text_more1')
    const seeMoreText2 = document.getElementById('text_more2')
    const seeMoreText3 = document.getElementById('text_more3')
    
    seeMoreBtn1.addEventListener('click', function(){
      seeMoreText1.style.display = 'block'
    })
    seeMoreBtn2.addEventListener('click', function(){
      seeMoreText2.style.display = 'block'
    })
    seeMoreBtn3.addEventListener('click', function(){
      seeMoreText3.style.display = 'block'
    })
  } catch(e) {}
})();


(() => {
  try {
   
    const card = document.querySelector('.feedback_card')
    const rBtn = document.getElementById('feedback_btn_r')
    const lBtn = document.getElementById('feedback_btn_l')
    const sliderFeedback = document.getElementById('feedback_card_line')
    const cardsAmount = 6
    const cardsPerPage = 3
    let activeIndex = 0
    let cardWidth = card.clientWidth + 20;

    function onActiveIndexChanged(){
      sliderFeedback.style.transform = `translateX(calc(${-activeIndex * cardWidth}px))`
    }

    lBtn.addEventListener('click', function(){
      activeIndex = Math.min(activeIndex + 1, cardsAmount - cardsPerPage)
      onActiveIndexChanged()
    })

    rBtn.addEventListener('click', function(){
      activeIndex = Math.max(activeIndex - 1, 0)
      onActiveIndexChanged()
    })

  } catch(e) {}
})();
