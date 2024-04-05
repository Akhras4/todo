import React, { Component } from 'react';
import { gsap } from 'gsap';
import Demo from './demo';

export default class Nav extends Component {
    componentDidMount() {
    const t1 = gsap.timeline({ default: { ease: "power4.out", duration: 0.7 } });
    t1.from("#Matrix path, #Master path", {
        xPercent: -20,
        stagger: 0.15,
        duration: 1,
        repeat: -1,
    });
    let helpAnimation = gsap.to("#Help path", {
        yPercent: 20,
        xPercent: 20,
        scale: 1.2,
        rotation: 360,
        transformOrigin: "center center",
        stagger: -0.2,
        duration: 0.2,
        paused: true,
        onComplete: function() {
            resetAnimation();
        }
    });
    document.querySelector("#helpco").addEventListener("mouseenter", function() {
        helpAnimation.restart();
    });
    function resetAnimation() {
        gsap.to("#Help path", {
            scale: 1,
            yPercent: 0,
            xPercent: 0,
        });
    }
    let helpAnimation1 = gsap.to("#LOGIN path", {
        yPercent: 20,
        xPercent: 20,
        scale: 1.2,
        rotation: 360,
        transformOrigin: "center center",
        stagger: -0.2,
        duration: 0.2,
        paused: true,
        onComplete: function() {
            resetAnimation1();
        }
    });
    document.querySelector("#LOGINcon").addEventListener("mouseenter", function() {
        helpAnimation1.restart();
    });
    function resetAnimation1() {
        gsap.to("#LOGIN path", {
            scale: 1,
            yPercent: 0,
            xPercent: 0,
        });
    }
}

    render() {
    return (
      <div>
          <nav class="nav">
<div class="logo">
    <svg width="226" height="125" viewBox="0 0 226 125" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="MatrixMaster"  gradientTransform="matrix(1 0 0 -1 0 55.8028)">
                <stop offset="10%" />
                <stop offset="40%" />
                <stop offset="100%" />
            </linearGradient>
        </defs>
        <g id="Frame 1">
        <rect width="226" height="125" fill="white"/>
        <g id="Matrix">
        <path id="Vector" d="M142.34 47.3636L147.044 55.3921L151.749 47.3636H155.226L148.885 57.1818L155.226 67H151.749L147.044 59.3807L142.34 67H138.862L145.101 57.1818L138.862 47.3636H142.34Z" fill="url('#MatrixMaster')"/>
        <path id="Vector_2" d="M131.547 67V47.3636H134.564V67H131.547ZM133.081 44.0909C132.493 44.0909 131.985 43.8906 131.559 43.4901C131.142 43.0895 130.933 42.608 130.933 42.0455C130.933 41.483 131.142 41.0014 131.559 40.6009C131.985 40.2003 132.493 40 133.081 40C133.669 40 134.172 40.2003 134.589 40.6009C135.015 41.0014 135.228 41.483 135.228 42.0455C135.228 42.608 135.015 43.0895 134.589 43.4901C134.172 43.8906 133.669 44.0909 133.081 44.0909Z" fill="url('#MatrixMaster')"/>
        <path id="Vector_3" d="M118.152 67V47.3636H121.067V50.3296H121.271C121.629 49.358 122.277 48.5696 123.214 47.9645C124.152 47.3594 125.209 47.0568 126.385 47.0568C126.607 47.0568 126.884 47.0611 127.216 47.0696C127.548 47.0781 127.8 47.0909 127.97 47.108V50.1761C127.868 50.1506 127.634 50.1122 127.267 50.0611C126.909 50.0014 126.53 49.9716 126.129 49.9716C125.175 49.9716 124.322 50.1719 123.572 50.5724C122.831 50.9645 122.243 51.5099 121.808 52.2088C121.382 52.8992 121.169 53.6875 121.169 54.5739V67H118.152Z" fill="black"/>
        <path id="Vector_4" d="M113.614 47.3636V49.9205H103.438V47.3636H113.614ZM106.403 42.6591H109.42V61.375C109.42 62.2273 109.544 62.8665 109.791 63.2926C110.047 63.7102 110.371 63.9915 110.763 64.1364C111.163 64.2727 111.585 64.3409 112.028 64.3409C112.361 64.3409 112.634 64.3239 112.847 64.2898C113.06 64.2472 113.23 64.2131 113.358 64.1875L113.972 66.8977C113.767 66.9744 113.482 67.0511 113.115 67.1278C112.749 67.2131 112.284 67.2557 111.722 67.2557C110.869 67.2557 110.034 67.0724 109.216 66.706C108.406 66.3395 107.733 65.7812 107.196 65.0312C106.668 64.2812 106.403 63.3352 106.403 62.1932V42.6591Z" fill="url('#MatrixMaster')"/>
        <path id="Vector_5" d="M90.5672 67.4602C89.3228 67.4602 88.1936 67.2259 87.1794 66.7571C86.1652 66.2798 85.3598 65.5938 84.7632 64.6989C84.1666 63.7955 83.8683 62.7046 83.8683 61.4262C83.8683 60.3012 84.0899 59.3892 84.5331 58.6904C84.9762 57.983 85.5686 57.429 86.31 57.0284C87.0515 56.6279 87.8697 56.3296 88.7646 56.1335C89.668 55.929 90.5757 55.7671 91.4876 55.6477C92.6808 55.4943 93.6481 55.3793 94.3896 55.3026C95.1396 55.2173 95.6851 55.0767 96.026 54.8807C96.3754 54.6847 96.5501 54.3438 96.5501 53.858V53.7557C96.5501 52.4943 96.2049 51.5142 95.5146 50.8154C94.8328 50.1165 93.7973 49.7671 92.4081 49.7671C90.9677 49.7671 89.8385 50.0824 89.0203 50.7131C88.2021 51.3438 87.6268 52.0171 87.2944 52.733L84.4308 51.7102C84.9421 50.5171 85.624 49.5881 86.4762 48.9233C87.337 48.25 88.2745 47.7813 89.2887 47.5171C90.3115 47.2443 91.3171 47.108 92.3058 47.108C92.9365 47.108 93.6609 47.1847 94.4791 47.3381C95.3058 47.483 96.1027 47.7855 96.8697 48.2458C97.6453 48.706 98.2887 49.4006 98.8001 50.3296C99.3115 51.2585 99.5672 52.5029 99.5672 54.0625V67H96.5501V64.3409H96.3967C96.1922 64.7671 95.8512 65.223 95.374 65.7088C94.8967 66.1946 94.2618 66.608 93.4691 66.9489C92.6765 67.2898 91.7092 67.4602 90.5672 67.4602ZM91.0274 64.75C92.2206 64.75 93.2262 64.5156 94.0444 64.0469C94.8711 63.5781 95.4933 62.973 95.9109 62.2315C96.337 61.4901 96.5501 60.7102 96.5501 59.8921V57.1307C96.4223 57.2841 96.141 57.4247 95.7064 57.5526C95.2802 57.6719 94.7859 57.7784 94.2234 57.8722C93.6694 57.9574 93.1282 58.0341 92.5998 58.1023C92.0799 58.1619 91.6581 58.2131 91.3342 58.2557C90.5501 58.358 89.8172 58.5242 89.1353 58.7543C88.462 58.9759 87.9166 59.3125 87.499 59.7642C87.0899 60.2074 86.8853 60.8125 86.8853 61.5796C86.8853 62.6279 87.2731 63.4205 88.0487 63.9574C88.8328 64.4858 89.8257 64.75 91.0274 64.75Z" fill="black"/>
        <path id="Vector_6" d="M53.1705 40.8182H56.9546L65.8523 62.5511H66.1591L75.0568 40.8182H78.8409V67H75.875V47.108H75.6193L67.4375 67H64.5739L56.3921 47.108H56.1364V67H53.1705V40.8182Z" fill="url('#MatrixMaster')"/>
        </g>
        <g id="Master">
        <path id="Vector" d="M188.703 102V82.3636H191.618V85.3296H191.822C192.18 84.358 192.828 83.5696 193.765 82.9645C194.703 82.3594 195.76 82.0568 196.936 82.0568C197.157 82.0568 197.434 82.0611 197.767 82.0696C198.099 82.0781 198.35 82.0909 198.521 82.108V85.1761C198.419 85.1506 198.184 85.1122 197.818 85.0611C197.46 85.0014 197.081 84.9716 196.68 84.9716C195.725 84.9716 194.873 85.1719 194.123 85.5724C193.382 85.9645 192.794 86.5099 192.359 87.2088C191.933 87.8992 191.72 88.6875 191.72 89.5739V102H188.703Z" fill="url('#MatrixMaster')"/>
        <path id="Vector_8" d="M175.983 102.409C174.091 102.409 172.458 101.991 171.086 101.156C169.723 100.312 168.67 99.1363 167.929 97.6278C167.196 96.1108 166.829 94.3466 166.829 92.3352C166.829 90.3238 167.196 88.5511 167.929 87.017C168.67 85.4744 169.701 84.2727 171.022 83.4119C172.352 82.5426 173.903 82.1079 175.676 82.1079C176.699 82.1079 177.708 82.2784 178.706 82.6193C179.703 82.9602 180.61 83.5142 181.429 84.2812C182.247 85.0398 182.899 86.0454 183.385 87.2983C183.87 88.5511 184.113 90.0937 184.113 91.9261V93.2045H168.977V90.5966H181.045C181.045 89.4886 180.824 88.5 180.38 87.6307C179.946 86.7613 179.324 86.0753 178.514 85.5724C177.713 85.0696 176.767 84.8182 175.676 84.8182C174.474 84.8182 173.434 85.1165 172.556 85.7131C171.687 86.3011 171.018 87.0682 170.549 88.0142C170.081 88.9602 169.846 89.9744 169.846 91.0568V92.7954C169.846 94.2784 170.102 95.5355 170.613 96.5667C171.133 97.5895 171.853 98.3693 172.774 98.9062C173.694 99.4346 174.764 99.6988 175.983 99.6988C176.775 99.6988 177.491 99.5881 178.13 99.3665C178.778 99.1363 179.336 98.7954 179.805 98.3437C180.274 97.8835 180.636 97.3125 180.892 96.6307L183.806 97.4488C183.5 98.4375 182.984 99.3068 182.26 100.057C181.535 100.798 180.64 101.378 179.575 101.795C178.51 102.205 177.312 102.409 175.983 102.409Z" fill="black"/>
        <path id="Vector_9" d="M163.422 82.3636V84.9205H153.246V82.3636H163.422ZM156.212 77.6591H159.229V96.375C159.229 97.2273 159.353 97.8665 159.6 98.2926C159.855 98.7102 160.179 98.9915 160.571 99.1364C160.972 99.2727 161.394 99.3409 161.837 99.3409C162.169 99.3409 162.442 99.3239 162.655 99.2898C162.868 99.2472 163.039 99.2131 163.167 99.1875L163.78 101.898C163.576 101.974 163.29 102.051 162.924 102.128C162.557 102.213 162.093 102.256 161.53 102.256C160.678 102.256 159.843 102.072 159.025 101.706C158.215 101.339 157.542 100.781 157.005 100.031C156.476 99.2812 156.212 98.3352 156.212 97.1932V77.6591Z" fill="url('#MatrixMaster')"/>
        <path id="Vector_10" d="M149.983 86.7613L147.273 87.5284C147.102 87.0767 146.851 86.6378 146.519 86.2116C146.195 85.777 145.751 85.419 145.189 85.1378C144.626 84.8565 143.906 84.7159 143.028 84.7159C141.827 84.7159 140.825 84.9929 140.024 85.5469C139.232 86.0923 138.835 86.7869 138.835 87.6307C138.835 88.3807 139.108 88.973 139.653 89.4077C140.199 89.8423 141.051 90.2045 142.21 90.4943L145.125 91.2102C146.881 91.6363 148.189 92.2883 149.05 93.1662C149.911 94.0355 150.341 95.1562 150.341 96.5284C150.341 97.6534 150.017 98.6591 149.369 99.5454C148.73 100.432 147.835 101.131 146.685 101.642C145.534 102.153 144.196 102.409 142.671 102.409C140.668 102.409 139.01 101.974 137.697 101.105C136.385 100.236 135.554 98.9659 135.205 97.2954L138.068 96.5795C138.341 97.6363 138.857 98.429 139.615 98.9574C140.382 99.4858 141.384 99.75 142.619 99.75C144.026 99.75 145.142 99.4517 145.969 98.8551C146.804 98.25 147.222 97.5256 147.222 96.6818C147.222 96 146.983 95.429 146.506 94.9687C146.028 94.5 145.296 94.1506 144.307 93.9204L141.034 93.1534C139.236 92.7273 137.915 92.0667 137.071 91.1719C136.236 90.2685 135.818 89.1392 135.818 87.7841C135.818 86.6761 136.129 85.696 136.751 84.8437C137.382 83.9915 138.239 83.3224 139.321 82.8366C140.412 82.3508 141.648 82.1079 143.028 82.1079C144.972 82.1079 146.497 82.5341 147.605 83.3863C148.722 84.2386 149.514 85.3636 149.983 86.7613Z" fill="black"/>
        <path id="Vector_11" d="M121.567 102.46C120.323 102.46 119.194 102.226 118.179 101.757C117.165 101.28 116.36 100.594 115.763 99.6988C115.167 98.7954 114.868 97.7045 114.868 96.4261C114.868 95.3011 115.09 94.3892 115.533 93.6903C115.976 92.9829 116.569 92.429 117.31 92.0284C118.052 91.6278 118.87 91.3295 119.765 91.1335C120.668 90.929 121.576 90.767 122.488 90.6477C123.681 90.4943 124.648 90.3792 125.39 90.3025C126.14 90.2173 126.685 90.0767 127.026 89.8807C127.375 89.6846 127.55 89.3437 127.55 88.8579V88.7557C127.55 87.4943 127.205 86.5142 126.515 85.8153C125.833 85.1165 124.797 84.767 123.408 84.767C121.968 84.767 120.838 85.0824 120.02 85.7131C119.202 86.3437 118.627 87.017 118.294 87.7329L115.431 86.7102C115.942 85.517 116.624 84.5881 117.476 83.9233C118.337 83.25 119.275 82.7812 120.289 82.517C121.311 82.2443 122.317 82.1079 123.306 82.1079C123.936 82.1079 124.661 82.1846 125.479 82.3381C126.306 82.4829 127.103 82.7855 127.87 83.2457C128.645 83.706 129.289 84.4006 129.8 85.3295C130.311 86.2585 130.567 87.5028 130.567 89.0625V102H127.55V99.3409H127.397C127.192 99.767 126.851 100.223 126.374 100.709C125.897 101.195 125.262 101.608 124.469 101.949C123.677 102.29 122.709 102.46 121.567 102.46ZM122.027 99.75C123.221 99.75 124.226 99.5156 125.044 99.0469C125.871 98.5781 126.493 97.973 126.911 97.2315C127.337 96.49 127.55 95.7102 127.55 94.892V92.1307C127.422 92.2841 127.141 92.4247 126.706 92.5525C126.28 92.6719 125.786 92.7784 125.223 92.8721C124.669 92.9574 124.128 93.0341 123.6 93.1023C123.08 93.1619 122.658 93.2131 122.334 93.2557C121.55 93.3579 120.817 93.5241 120.135 93.7542C119.462 93.9758 118.917 94.3125 118.499 94.7642C118.09 95.2074 117.885 95.8125 117.885 96.5795C117.885 97.6278 118.273 98.4204 119.049 98.9574C119.833 99.4858 120.826 99.75 122.027 99.75Z" fill="url('#MatrixMaster')"/>
        <path id="Vector_12" d="M84.1705 75.8182H87.9546L96.8523 97.5511H97.1591L106.057 75.8182H109.841V102H106.875V82.108H106.619L98.4375 102H95.5739L87.3921 82.108H87.1364V102H84.1705V75.8182Z" fill="url('#MatrixMaster')"/>
        </g>
        </g>
    </svg>
</div>
<div class="RightSideContiner">
    <Demo />
    <div id='LOGINcon'>
    <svg width="113" height="33" viewBox="0 0 113 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Frame 1" clip-path="url(#clip0_1_2)">
        <rect width="113" height="33" fill="white"/>
        <g id="Frame 2">
        <g id="LOGIN">
        <path id="Vector" d="M64.9947 4.45454V19H63.2901L55.364 7.57954H55.2219V19H53.4606V4.45454H55.1651L63.1197 15.9034H63.2617V4.45454H64.9947Z" fill="black"/>
        <path id="Vector_2" d="M49.929 4.45454V19H48.1676V4.45454H49.929Z" fill="black"/>
        <path id="Vector_3" d="M37.6225 9C37.4663 8.52178 37.2603 8.09328 37.0046 7.71449C36.7537 7.33096 36.453 7.00426 36.1026 6.73437C35.757 6.46449 35.364 6.25852 34.9236 6.11648C34.4833 5.97443 34.0004 5.90341 33.4748 5.90341C32.613 5.90341 31.8294 6.12595 31.1239 6.57102C30.4184 7.0161 29.8574 7.67187 29.4407 8.53835C29.024 9.40483 28.8157 10.4678 28.8157 11.7273C28.8157 12.9867 29.0264 14.0497 29.4478 14.9162C29.8692 15.7827 30.4397 16.4384 31.1594 16.8835C31.8791 17.3286 32.6888 17.5511 33.5884 17.5511C34.4218 17.5511 35.1557 17.3736 35.7901 17.0185C36.4293 16.6586 36.9265 16.152 37.2816 15.4986C37.6415 14.8404 37.8214 14.0663 37.8214 13.1761L38.3612 13.2898H33.9861V11.7273H39.5259V13.2898C39.5259 14.4877 39.2702 15.5294 38.7589 16.4148C38.2523 17.3002 37.5515 17.9867 36.6566 18.4744C35.7665 18.9574 34.7437 19.1989 33.5884 19.1989C32.3005 19.1989 31.1689 18.8958 30.1935 18.2898C29.2229 17.6837 28.4653 16.822 27.9208 15.7045C27.381 14.5871 27.1112 13.2614 27.1112 11.7273C27.1112 10.5767 27.265 9.54214 27.5728 8.62358C27.8853 7.70028 28.3256 6.9143 28.8938 6.26562C29.462 5.61695 30.1344 5.11979 30.9109 4.77415C31.6874 4.4285 32.542 4.25568 33.4748 4.25568C34.2418 4.25568 34.9568 4.37168 35.6197 4.60369C36.2873 4.83096 36.8815 5.1553 37.4023 5.5767C37.9279 5.99337 38.3659 6.4929 38.7163 7.07528C39.0666 7.65293 39.3081 8.29451 39.4407 9H37.6225Z" fill="black"/>
        <path id="Vector_4" d="M24.7177 11.7273C24.7177 13.2614 24.4407 14.5871 23.8867 15.7045C23.3327 16.822 22.5728 17.6837 21.6069 18.2898C20.641 18.8958 19.5378 19.1989 18.2972 19.1989C17.0567 19.1989 15.9535 18.8958 14.9876 18.2898C14.0217 17.6837 13.2617 16.822 12.7077 15.7045C12.1538 14.5871 11.8768 13.2614 11.8768 11.7273C11.8768 10.1932 12.1538 8.86742 12.7077 7.75C13.2617 6.63257 14.0217 5.77083 14.9876 5.16477C15.9535 4.55871 17.0567 4.25568 18.2972 4.25568C19.5378 4.25568 20.641 4.55871 21.6069 5.16477C22.5728 5.77083 23.3327 6.63257 23.8867 7.75C24.4407 8.86742 24.7177 10.1932 24.7177 11.7273ZM23.0131 11.7273C23.0131 10.4678 22.8024 9.40483 22.381 8.53835C21.9644 7.67187 21.3986 7.0161 20.6836 6.57102C19.9734 6.12595 19.1779 5.90341 18.2972 5.90341C17.4165 5.90341 16.6187 6.12595 15.9038 6.57102C15.1935 7.0161 14.6277 7.67187 14.2063 8.53835C13.7897 9.40483 13.5813 10.4678 13.5813 11.7273C13.5813 12.9867 13.7897 14.0497 14.2063 14.9162C14.6277 15.7827 15.1935 16.4384 15.9038 16.8835C16.6187 17.3286 17.4165 17.5511 18.2972 17.5511C19.1779 17.5511 19.9734 17.3286 20.6836 16.8835C21.3986 16.4384 21.9644 15.7827 22.381 14.9162C22.8024 14.0497 23.0131 12.9867 23.0131 11.7273Z" fill="black"/>
        <path id="Vector_5" d="M1.76136 19V4.45454H3.52273V17.4375H10.2841V19H1.76136Z" fill="black"/>
        </g>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_1_2">
        <rect width="113" height="33" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    </div>
    <div id="helpco">
            <svg width="80" height="45" viewBox="0 0 80 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Frame1" clip-path="url(#clip0_1_6)">
                <rect width="80" height="45" fill="white"/>
                <g id="Frame2">
                <g id="Help">
                <path id="Vector" d="M32.7255 23.0909V8.09091H34.3448V9.82386H34.5437C34.6668 9.63447 34.8372 9.39299 35.055 9.09943C35.2776 8.80114 35.5948 8.53598 36.0067 8.30398C36.4234 8.06723 36.9869 7.94886 37.6971 7.94886C38.6156 7.94886 39.4253 8.1785 40.1261 8.63778C40.8268 9.09706 41.3737 9.74811 41.7667 10.5909C42.1597 11.4337 42.3562 12.428 42.3562 13.5739C42.3562 14.7292 42.1597 15.7306 41.7667 16.5781C41.3737 17.4209 40.8292 18.0743 40.1332 18.5384C39.4371 18.9976 38.6346 19.2273 37.7255 19.2273C37.0247 19.2273 36.4637 19.1113 36.0423 18.8793C35.6209 18.6425 35.2965 18.375 35.0692 18.0767C34.842 17.7737 34.6668 17.5227 34.5437 17.3239H34.4016V23.0909H32.7255ZM34.3732 13.5455C34.3732 14.3693 34.494 15.0961 34.7354 15.7259C34.9769 16.3509 35.3297 16.8409 35.7937 17.196C36.2577 17.5464 36.8259 17.7216 37.4982 17.7216C38.199 17.7216 38.7837 17.5369 39.2525 17.1676C39.726 16.7936 40.0811 16.2917 40.3178 15.6619C40.5593 15.0275 40.68 14.322 40.68 13.5455C40.68 12.7784 40.5617 12.0871 40.3249 11.4716C40.0929 10.8513 39.7402 10.3613 39.2667 10.0014C38.7979 9.63684 38.2085 9.45454 37.4982 9.45454C36.8164 9.45454 36.2435 9.62737 35.7795 9.97301C35.3155 10.3139 34.9651 10.7921 34.7283 11.4077C34.4916 12.0185 34.3732 12.7311 34.3732 13.5455Z" fill="black"/>
                <path id="Vector2" d="M29.6555 4.45454V19H27.9794V4.45454H29.6555Z" fill="black"/>
                <path id="Vector2" d="M20.9126 19.2273C19.8615 19.2273 18.9548 18.9953 18.1925 18.5312C17.4349 18.0625 16.8501 17.4091 16.4382 16.571C16.031 15.7282 15.8274 14.7481 15.8274 13.6307C15.8274 12.5133 16.031 11.5284 16.4382 10.6761C16.8501 9.81913 17.4231 9.15151 18.157 8.67329C18.8956 8.19034 19.7573 7.94886 20.7422 7.94886C21.3104 7.94886 21.8715 8.04356 22.4254 8.23295C22.9794 8.42235 23.4837 8.73011 23.9382 9.15625C24.3928 9.57765 24.755 10.1364 25.0249 10.8324C25.2947 11.5284 25.4297 12.3854 25.4297 13.4034V14.1136H17.0206V12.6648H23.7251C23.7251 12.0492 23.602 11.5 23.3558 11.017C23.1143 10.5341 22.7687 10.1529 22.3189 9.87358C21.8738 9.59422 21.3482 9.45454 20.7422 9.45454C20.0746 9.45454 19.4969 9.62026 19.0092 9.9517C18.5263 10.2784 18.1546 10.7045 17.8942 11.2301C17.6338 11.7557 17.5036 12.3191 17.5036 12.9205V13.8864C17.5036 14.7102 17.6456 15.4086 17.9297 15.9815C18.2185 16.5497 18.6186 16.983 19.13 17.2812C19.6413 17.5748 20.2356 17.7216 20.9126 17.7216C21.353 17.7216 21.7507 17.66 22.1058 17.5369C22.4657 17.4091 22.7758 17.2197 23.0362 16.9687C23.2966 16.7131 23.4979 16.3958 23.6399 16.017L25.2592 16.4716C25.0888 17.0208 24.8023 17.5038 24.3999 17.9205C23.9974 18.3324 23.5002 18.6544 22.9084 18.8864C22.3165 19.1136 21.6513 19.2273 20.9126 19.2273Z" fill="black"/>
                <path id="Vector2" d="M1.76136 19V4.45454H3.52273V10.9318H11.2784V4.45454H13.0398V19H11.2784V12.4943H3.52273V19H1.76136Z" fill="black"/>
                </g>
                </g>
                </g>
                <defs>
                <clipPath id="clip0_1_6">
                <rect width="80" height="45" fill="white"/>
                </clipPath>
                </defs>
                </svg>
        </div>
        <div id="SHOPPING">
            <svg width="117" height="33" viewBox="0 0 117 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Frame 1" clip-path="url(#clip0_1_2)">
                <rect width="117" height="33" fill="white"/>
                <g id="Frame2" >
                <g id="SHOPPING BAG">
                <path id="Vector1" d="M104.752 7.63636C104.752 8.71023 104.611 9.69886 104.33 10.6023C104.051 11.5028 103.652 12.3324 103.132 13.0909H102.246C102.451 12.8097 102.641 12.4631 102.817 12.0511C102.996 11.642 103.152 11.1932 103.286 10.7045C103.419 10.2131 103.523 9.70597 103.597 9.18324C103.674 8.65767 103.712 8.14205 103.712 7.63636C103.712 6.96023 103.647 6.27415 103.516 5.57813C103.385 4.8821 103.209 4.2358 102.988 3.6392C102.766 3.04261 102.519 2.55682 102.246 2.18182H103.132C103.652 2.94034 104.051 3.77131 104.33 4.67472C104.611 5.57528 104.752 6.5625 104.752 7.63636Z" fill="black"/>
                <path id="Vector" d="M97.9336 12.1193C97.2916 12.1193 96.7447 11.9446 96.293 11.5952C95.8413 11.2429 95.4961 10.733 95.2575 10.0653C95.0188 9.39489 94.8995 8.58523 94.8995 7.63636C94.8995 6.69318 95.0188 5.88778 95.2575 5.22017C95.4989 4.54972 95.8455 4.03835 96.2972 3.68608C96.7518 3.33097 97.2972 3.15341 97.9336 3.15341C98.57 3.15341 99.114 3.33097 99.5657 3.68608C100.02 4.03835 100.367 4.54972 100.605 5.22017C100.847 5.88778 100.968 6.69318 100.968 7.63636C100.968 8.58523 100.848 9.39489 100.61 10.0653C100.371 10.733 100.026 11.2429 99.5742 11.5952C99.1225 11.9446 98.5756 12.1193 97.9336 12.1193ZM97.9336 11.1818C98.57 11.1818 99.0643 10.875 99.4166 10.2614C99.7688 9.64773 99.945 8.77273 99.945 7.63636C99.945 6.88068 99.864 6.23722 99.7021 5.70597C99.543 5.17472 99.3129 4.76989 99.0117 4.49148C98.7134 4.21307 98.3541 4.07386 97.9336 4.07386C97.3029 4.07386 96.81 4.38494 96.4549 5.0071C96.0998 5.62642 95.9222 6.50284 95.9222 7.63636C95.9222 8.39205 96.0018 9.03409 96.1609 9.5625C96.32 10.0909 96.5487 10.4929 96.847 10.7685C97.1481 11.044 97.5103 11.1818 97.9336 11.1818Z" fill="black"/>
                <path id="Vector1" d="M91.1144 7.63636C91.1144 6.5625 91.2536 5.57528 91.532 4.67472C91.8132 3.77131 92.2138 2.94034 92.7337 2.18182H93.62C93.4155 2.46307 93.2237 2.80966 93.0448 3.22159C92.8686 3.63068 92.7138 4.08097 92.5803 4.57244C92.4467 5.06108 92.3416 5.56676 92.2649 6.08949C92.1911 6.61222 92.1541 7.12784 92.1541 7.63636C92.1541 8.3125 92.2195 8.99858 92.3501 9.6946C92.4808 10.3906 92.657 11.0369 92.8786 11.6335C93.1001 12.2301 93.3473 12.7159 93.62 13.0909H92.7337C92.2138 12.3324 91.8132 11.5028 91.532 10.6023C91.2536 9.69886 91.1144 8.71023 91.1144 7.63636Z" fill="black"/>
                <path id="Vector1" d="M87.9407 6C87.847 5.71307 87.7234 5.45597 87.57 5.22869C87.4194 4.99858 87.239 4.80256 87.0288 4.64063C86.8214 4.47869 86.5856 4.35511 86.3214 4.26989C86.0572 4.18466 85.7674 4.14205 85.4521 4.14205C84.935 4.14205 84.4648 4.27557 84.0416 4.54261C83.6183 4.80966 83.2816 5.20313 83.0316 5.72301C82.7816 6.2429 82.6566 6.88068 82.6566 7.63636C82.6566 8.39205 82.783 9.02983 83.0359 9.54972C83.2887 10.0696 83.631 10.4631 84.0629 10.7301C84.4947 10.9972 84.9805 11.1307 85.5202 11.1307C86.0202 11.1307 86.4606 11.0241 86.8413 10.8111C87.2248 10.5952 87.5231 10.2912 87.7362 9.89915C87.9521 9.50426 88.06 9.03977 88.06 8.50568L88.3839 8.57386H85.7589V7.63636H89.0827V8.57386C89.0827 9.29261 88.9293 9.91761 88.6225 10.4489C88.3185 10.9801 87.8981 11.392 87.3612 11.6847C86.8271 11.9744 86.2134 12.1193 85.5202 12.1193C84.7475 12.1193 84.0685 11.9375 83.4833 11.5739C82.9009 11.2102 82.4464 10.6932 82.1197 10.0227C81.7958 9.35227 81.6339 8.55682 81.6339 7.63636C81.6339 6.94602 81.7262 6.32528 81.9109 5.77415C82.0984 5.22017 82.3626 4.74858 82.7035 4.35938C83.0444 3.97017 83.4478 3.67188 83.9137 3.46449C84.3796 3.2571 84.8924 3.15341 85.4521 3.15341C85.9123 3.15341 86.3413 3.22301 86.739 3.36222C87.1396 3.49858 87.4961 3.69318 87.8086 3.94602C88.1239 4.19602 88.3867 4.49574 88.597 4.84517C88.8072 5.19176 88.9521 5.57671 89.0316 6H87.9407Z" fill="black"/>
                <path id="Vector1" d="M74.6335 12H73.5256L76.7301 3.27273H77.821L81.0256 12H79.9176L77.3097 4.65341H77.2415L74.6335 12ZM75.0426 8.59091H79.5085V9.52841H75.0426V8.59091Z" fill="black"/>
                <path id="Vector1" d="M66.4709 12V3.27273H69.522C70.13 3.27273 70.6314 3.37784 71.0263 3.58807C71.4212 3.79546 71.7152 4.07528 71.9084 4.42756C72.1016 4.77699 72.1982 5.16477 72.1982 5.59091C72.1982 5.96591 72.1314 6.27557 71.9979 6.51989C71.8672 6.76421 71.6939 6.95739 71.478 7.09943C71.2649 7.24148 71.0334 7.34659 70.7834 7.41477V7.5C71.0504 7.51705 71.3189 7.6108 71.5888 7.78125C71.8587 7.95171 72.0845 8.19602 72.2663 8.5142C72.4482 8.83239 72.5391 9.22159 72.5391 9.68182C72.5391 10.1193 72.4396 10.5128 72.2408 10.8622C72.0419 11.2116 71.728 11.4886 71.299 11.6932C70.87 11.8977 70.3118 12 69.6243 12H66.4709ZM67.5277 11.0625H69.6243C70.3146 11.0625 70.8047 10.929 71.0945 10.6619C71.3871 10.392 71.5334 10.0653 71.5334 9.68182C71.5334 9.38636 71.4581 9.11364 71.3075 8.86364C71.157 8.6108 70.9425 8.40909 70.6641 8.25852C70.3857 8.10511 70.0561 8.02841 69.6754 8.02841H67.5277V11.0625ZM67.5277 7.10796H69.4879C69.8061 7.10796 70.093 7.04546 70.3487 6.92046C70.6073 6.79546 70.8118 6.61932 70.9624 6.39205C71.1158 6.16477 71.1925 5.89773 71.1925 5.59091C71.1925 5.20739 71.0589 4.8821 70.7919 4.61506C70.5249 4.34517 70.1016 4.21023 69.522 4.21023H67.5277V7.10796Z" fill="black"/>
                <path id="Vector1" d="M60.1438 6C60.0501 5.71307 59.9265 5.45597 59.7731 5.22869C59.6225 4.99858 59.4421 4.80256 59.2319 4.64063C59.0245 4.47869 58.7887 4.35511 58.5245 4.26989C58.2603 4.18466 57.9705 4.14205 57.6552 4.14205C57.1381 4.14205 56.668 4.27557 56.2447 4.54261C55.8214 4.80966 55.4847 5.20313 55.2347 5.72301C54.9847 6.2429 54.8597 6.88068 54.8597 7.63636C54.8597 8.39205 54.9861 9.02983 55.239 9.54972C55.4918 10.0696 55.8342 10.4631 56.266 10.7301C56.6978 10.9972 57.1836 11.1307 57.7234 11.1307C58.2234 11.1307 58.6637 11.0241 59.0444 10.8111C59.4279 10.5952 59.7262 10.2912 59.9393 9.89915C60.1552 9.50426 60.2631 9.03977 60.2631 8.50568L60.587 8.57386H57.962V7.63636H61.2859V8.57386C61.2859 9.29261 61.1325 9.91761 60.8256 10.4489C60.5217 10.9801 60.1012 11.392 59.5643 11.6847C59.0302 11.9744 58.4165 12.1193 57.7234 12.1193C56.9506 12.1193 56.2717 11.9375 55.6864 11.5739C55.104 11.2102 54.6495 10.6932 54.3228 10.0227C53.9989 9.35227 53.837 8.55682 53.837 7.63636C53.837 6.94602 53.9293 6.32528 54.114 5.77415C54.3015 5.22017 54.5657 4.74858 54.9066 4.35938C55.2475 3.97017 55.6509 3.67188 56.1168 3.46449C56.5827 3.2571 57.0955 3.15341 57.6552 3.15341C58.1154 3.15341 58.5444 3.22301 58.9421 3.36222C59.3427 3.49858 59.6992 3.69318 60.0117 3.94602C60.3271 4.19602 60.5898 4.49574 60.8001 4.84517C61.0103 5.19176 61.1552 5.57671 61.2347 6H60.1438Z" fill="black"/>
                <path id="Vector1" d="M52.0632 3.27273V12H51.0405L46.2848 5.14773H46.1996V12H45.1428V3.27273H46.1655L50.9382 10.142H51.0234V3.27273H52.0632Z" fill="black"/>
                <path id="Vector1" d="M43.0238 3.27273V12H41.967V3.27273H43.0238Z" fill="black"/>
                <path id="Vector1" d="M34.3498 12V3.27273H37.2987C37.9833 3.27273 38.543 3.39631 38.9776 3.64347C39.4151 3.88778 39.739 4.21875 39.9492 4.63636C40.1594 5.05398 40.2646 5.51989 40.2646 6.03409C40.2646 6.5483 40.1594 7.01563 39.9492 7.43608C39.7418 7.85653 39.4208 8.19176 38.9862 8.44176C38.5515 8.68892 37.9947 8.8125 37.3157 8.8125H35.2021V7.875H37.2816C37.7504 7.875 38.1268 7.79403 38.4109 7.6321C38.695 7.47017 38.9009 7.25142 39.0288 6.97585C39.1594 6.69744 39.2248 6.38352 39.2248 6.03409C39.2248 5.68466 39.1594 5.37216 39.0288 5.09659C38.9009 4.82102 38.6935 4.60511 38.4066 4.44886C38.1197 4.28977 37.739 4.21023 37.2646 4.21023H35.4066V12H34.3498Z" fill="black"/>
                <path id="Vector1" d="M26.7326 12V3.27273H29.6815C30.3661 3.27273 30.9258 3.39631 31.3604 3.64347C31.7979 3.88778 32.1218 4.21875 32.332 4.63636C32.5423 5.05398 32.6474 5.51989 32.6474 6.03409C32.6474 6.5483 32.5423 7.01563 32.332 7.43608C32.1246 7.85653 31.8036 8.19176 31.369 8.44176C30.9343 8.68892 30.3775 8.8125 29.6985 8.8125H27.5849V7.875H29.6644C30.1332 7.875 30.5096 7.79403 30.7937 7.6321C31.0778 7.47017 31.2837 7.25142 31.4116 6.97585C31.5423 6.69744 31.6076 6.38352 31.6076 6.03409C31.6076 5.68466 31.5423 5.37216 31.4116 5.09659C31.2837 4.82102 31.0764 4.60511 30.7894 4.44886C30.5025 4.28977 30.1218 4.21023 29.6474 4.21023H27.7894V12H26.7326Z" fill="black"/>
                <path id="Vector1" d="M24.9556 7.63636C24.9556 8.55682 24.7894 9.35227 24.457 10.0227C24.1246 10.6932 23.6687 11.2102 23.0891 11.5739C22.5096 11.9375 21.8477 12.1193 21.1033 12.1193C20.359 12.1193 19.6971 11.9375 19.1175 11.5739C18.538 11.2102 18.082 10.6932 17.7496 10.0227C17.4173 9.35227 17.2511 8.55682 17.2511 7.63636C17.2511 6.71591 17.4173 5.92046 17.7496 5.25C18.082 4.57955 18.538 4.0625 19.1175 3.69886C19.6971 3.33523 20.359 3.15341 21.1033 3.15341C21.8477 3.15341 22.5096 3.33523 23.0891 3.69886C23.6687 4.0625 24.1246 4.57955 24.457 5.25C24.7894 5.92046 24.9556 6.71591 24.9556 7.63636ZM23.9329 7.63636C23.9329 6.88068 23.8065 6.2429 23.5536 5.72301C23.3036 5.20313 22.9641 4.80966 22.5352 4.54261C22.109 4.27557 21.6317 4.14205 21.1033 4.14205C20.5749 4.14205 20.0962 4.27557 19.6673 4.54261C19.2411 4.80966 18.9016 5.20313 18.6488 5.72301C18.3988 6.2429 18.2738 6.88068 18.2738 7.63636C18.2738 8.39205 18.3988 9.02983 18.6488 9.54972C18.9016 10.0696 19.2411 10.4631 19.6673 10.7301C20.0962 10.9972 20.5749 11.1307 21.1033 11.1307C21.6317 11.1307 22.109 10.9972 22.5352 10.7301C22.9641 10.4631 23.3036 10.0696 23.5536 9.54972C23.8065 9.02983 23.9329 8.39205 23.9329 7.63636Z" fill="black"/>
                <path id="Vector1" d="M8.70916 12V3.27273H9.76598V7.15909H14.4194V3.27273H15.4762V12H14.4194V8.09659H9.76598V12H8.70916Z" fill="black"/>
                <path id="Vector1" d="M5.82955 5.45455C5.77841 5.02273 5.57102 4.6875 5.20739 4.44886C4.84375 4.21023 4.39773 4.09091 3.86932 4.09091C3.48296 4.09091 3.14489 4.15341 2.85512 4.27841C2.56818 4.40341 2.34375 4.57529 2.18182 4.79404C2.02273 5.01279 1.94318 5.26136 1.94318 5.53977C1.94318 5.77273 1.99858 5.97301 2.10938 6.14063C2.22301 6.3054 2.3679 6.44318 2.54404 6.55398C2.72017 6.66193 2.90483 6.75142 3.09801 6.82244C3.29119 6.89063 3.46875 6.94602 3.63068 6.98864L4.51705 7.22727C4.74432 7.28693 4.99716 7.36932 5.27557 7.47443C5.55682 7.57955 5.82529 7.72301 6.08097 7.90483C6.33949 8.08381 6.55256 8.31392 6.72017 8.59517C6.88779 8.87642 6.97159 9.22159 6.97159 9.63068C6.97159 10.1023 6.84801 10.5284 6.60085 10.9091C6.35654 11.2898 5.99858 11.5923 5.52699 11.8168C5.05824 12.0412 4.48864 12.1534 3.81818 12.1534C3.19318 12.1534 2.65199 12.0526 2.1946 11.8509C1.74006 11.6491 1.3821 11.3679 1.12074 11.0071C0.862218 10.6463 0.715911 10.2273 0.68182 9.75H1.77273C1.80114 10.0795 1.91193 10.3523 2.10512 10.5682C2.30114 10.7813 2.5483 10.9403 2.84659 11.0455C3.14773 11.1477 3.47159 11.1989 3.81818 11.1989C4.22159 11.1989 4.58381 11.1335 4.90483 11.0028C5.22585 10.8693 5.48012 10.6847 5.66762 10.4489C5.85512 10.2102 5.94887 9.93182 5.94887 9.61364C5.94887 9.32386 5.8679 9.08807 5.70597 8.90625C5.54404 8.72443 5.33097 8.57671 5.06676 8.46307C4.80256 8.34943 4.51705 8.25 4.21023 8.16477L3.13637 7.85796C2.45455 7.66193 1.91477 7.3821 1.51705 7.01847C1.11932 6.65483 0.920456 6.17898 0.920456 5.59091C0.920456 5.10227 1.05256 4.67614 1.31676 4.3125C1.58381 3.94602 1.94176 3.66193 2.39063 3.46023C2.84233 3.25568 3.34659 3.15341 3.90341 3.15341C4.46591 3.15341 4.96591 3.25426 5.40341 3.45597C5.84091 3.65483 6.1875 3.92756 6.44318 4.27415C6.70171 4.62074 6.83807 5.01421 6.85227 5.45455H5.82955Z" fill="black"/>
                </g>
                </g>
                </g>
                <defs>
                <clipPath id="clip0_1_2">
                <rect width="117" height="33" fill="white"/>
                </clipPath>
                </defs>
                </svg>
        </div>
</div>

    </nav>
      </div>
    );
  }
}