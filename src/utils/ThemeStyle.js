
import $ from 'jquery';

const ThemeStyle = ()=>  {
    $('.fade_in').fadeIn(300);
    $('.fade_out').fadeOut(300);
    function inputStyle(ev) {
        const inputs = $('input, textarea');
        $(inputs).each(function (evt) {
            $(this).focusin(function () {
                $(this).parents('.input').addClass('focused');
            });
            $(this).focusout(function () {
                $(this).parents('.input').removeClass('focused');
                if($(this).val().length > 0){
                    $(this).parents('.input').addClass('focused');
                }else{
                    $(this).parents('.input').removeClass('focused');
                }
            });
            if($(this).val().length > 0){
                $(this).parents('.input').addClass('focused');
            }else{
                $(this).parents('.input').removeClass('focused');
            }

        })
    }


    inputStyle();

    function switches($chkBoxOrRadio) {
        const switchesEl =$($chkBoxOrRadio);
        $(switchesEl).each(function () {
            if($(this).hasClass('off')){
                $(this).find('input[type="checkbox"]').val('off');
            }else{
                $(this).find('input[type="checkbox"]').val('on');
            }

            $(this).click(function () {
                if($(this).hasClass('off')){
                    $(this).removeClass('off');
                    $(this).addClass('on');
                    $(this).find('input[type="checkbox"]').val('on');
                }else{
                    $(this).addClass('off');
                    $(this).removeClass('on');
                    $(this).find('input[type="checkbox"]').val('off');
                }

            })
        })
    }

    switches('.pro-link-switch');
    switches('.pro-link-radio');

//create dynamic bg colors

    function bgDynamic($class) {

        const colorArray = [
            '#1976D2',
            '#E91E63',
            '#00C853',
            '#F4511E',
            '#AA00FF',
            '#FFD600',
            '#4CAF50',
            '#ff1744',
            '#2979FF',
            '#7ED321',
            '#00a4e4',
            '#009688',
            '#FF6C31',
            '#7C4DFF',
            '#FBC02D',
            '#E91E63',
            '#0087be',
            '#dc3d84',
            '#FF6F00'
        ];

        $($class).each(function (i) {
            $(this).css('backgroundColor',colorArray[Math.floor(Math.random(2)*colorArray.length)])
        });

    }
    bgDynamic('.bg-dynamic');

    function handleTab($parentTab) {
        const tabs = $($parentTab);
        $(tabs).each(function () {
            $(this).click(function (e) {
                e.preventDefault();
                $(this).parent().find(tabs).removeClass('active');
                $(this).addClass('active');
            });
        });
    }

    handleTab('.tab');
};

export default ThemeStyle;
