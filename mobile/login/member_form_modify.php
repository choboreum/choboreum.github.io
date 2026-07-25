<? 
	session_start(); 
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta name="viewport" content="width=device-width">
    <meta name="format-detection" content="telephone=no">
    
	<meta charset="UTF-8">
	<title>회원가입</title>
	<link rel="stylesheet" href="../css/common.css">
	<link rel="stylesheet" href="../member/css/member_form.css">
	<link rel="stylesheet" href="css/member_form_modify.css">
	
	<script src="https://code.jquery.com/jquery-1.8.3.min.js"></script>
	<script src="https://kit.fontawesome.com/f8a0f5a24e.js" crossorigin="anonymous"></script>
	<script>
     $(document).ready(function() {
            //nick 중복검사		 
        $("#nick").keyup(function() {    // id입력 상자에 id값 입력시
            var nick = $('#nick').val();

            $.ajax({
                type: "POST",
                url: "../member/check_nick.php",
                data: "nick="+ nick,  
                cache: false, 
                success: function(data)
                {
                     $("#loadtext2").html(data);
                }
            });
        });		 

    });
	</script>
	<script>
   function check_nick()
   {
     window.open("../member/check_nick.php?nick=" + document.member_form.nick.value,
         "NICKcheck",
          "left=200,top=200,width=250,height=100,scrollbars=no,resizable=yes");
   }

   function check_input()
   {
      if (!document.member_form.pass.value)
      {
          alert("비밀번호를 입력하세요");    
          document.member_form.pass.focus();
          return;
      }

      if (!document.member_form.pass_confirm.value)
      {
          alert("비밀번호확인을 입력하세요");    
          document.member_form.pass_confirm.focus();
          return;
      }

      if (!document.member_form.name.value)
      {
          alert("이름을 입력하세요");    
          document.member_form.name.focus();
          return;
      }

      if (!document.member_form.nick.value)
      {
          alert("닉네임을 입력하세요");    
          document.member_form.nick.focus();
          return;
      }


      if (!document.member_form.hp2.value || !document.member_form.hp3.value )
      {
          alert("휴대폰 번호를 입력하세요");    
          document.member_form.nick.focus();
          return;
      }

      if (document.member_form.pass.value != 
            document.member_form.pass_confirm.value)
      {
          alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");    
          document.member_form.pass.focus();
          document.member_form.pass.select();
          return;
      }

      document.member_form.submit(); 
		   // insert.php 로 변수 전송
   }

   function reset_form()
   {
      document.member_form.id.value = "";
      document.member_form.pass.value = "";
      document.member_form.pass_confirm.value = "";
      document.member_form.name.value = "";
      document.member_form.nick.value = "";
      document.member_form.hp1.value = "010";
      document.member_form.hp2.value = "";
      document.member_form.hp3.value = "";
      document.member_form.email1.value = "";
      document.member_form.email2.value = "";
	  
      document.member_form.id.focus();

      return;
   }
</script>
<script src="js/prefixfree.min.js"></script>

<script>
  // <![CDATA[
  try {
   window.addEventListener('load', function(){
    setTimeout(scrollTo, 0, 0, 1); 
   }, false);
  } 
  catch(e) {}
  // ]]>
 </script>
 <!--[if lt IE 9]> 
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

<!--[if lt IE 9]>
    <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
<![endif]-->
</head>
<?
    //$userid='aaa';
    
    include "../../lib/dbconn.php";

    $sql = "select * from member where id='$userid'";
    $result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);
    //$row[id]....$row[level]

    $hp = explode("-", $row[hp]);  //000-0000-0000
    $hp1 = $hp[0];
    $hp2 = $hp[1];
    $hp3 = $hp[2];

    $email = explode("@", $row[email]);
    $email1 = $email[0];
    $email2 = $email[1];

    mysql_close();
?>
<body>
<div id="skipNav">
    <a href="#content">본문바로가기</a>
    <a href="#gnb">네비게이션바로가기</a>
 </div>
 <div id="wrap">
  <header id="headerArea"><!--고정이미지 미디어쿼리-->
      <h1><a href="../index.html">서대문자연사박물관 로고</a></h1>
      <a class="btn" href="javascript:void(0);"><i class="fas fa-bars"></i></a>
      <div class="box"></div>
      <nav id="gnb">
          <h2 class="hidden">글로벌네비게이션영역</h2>
           <p>서대문자연사박물관<br><span>Seodaemun Museum Of Natural History</span></p>
            <ul class="mainMenu">  
                <li class="depth1"><h3><a href="javascript:void(0);">기관소개<span class="navbtn"></span></a></h3>
                    <ul>
                        <li><a href="../sub1_1.html">인사말</a></li>
                        <li><a href="../sub1_2.html">박물관소개</a></li>
                        <li><a href="../sub1_3.html">연혁</a></li>
                    </ul>
                </li>
                <li class="depth1"><h3><a href="javascript:void(0);">이용안내<span class="navbtn"></span></a></h3>
                    <ul>
                        <li><a href="../sub2_1.html">관람안내</a></li>
                        <li><a href="../sub2_2.html">관람도우미</a></li>
                        <li><a href="../sub2_3.html">찾아오시는길</a></li>
                    </ul>
                </li>
                <li class="depth1"><h3><a href="javascript:void(0);">전시소개<span class="navbtn"></span></a></h3>
                    <ul>
                        <li><a href="../sub3_1.html">지구환경관</a></li>
                        <li><a href="../sub3_2.html">생명진화관</a></li>
                        <li><a href="../sub3_3.html">중앙홀</a></li>
                    </ul>
                </li>
                <li class="depth1"><h3><a href="javascript:void(0);">커뮤니티<span class="navbtn"></span></a></h3>
                    <ul>
                        <li><a href="../sub4_1.html">자주 묻는 질문</a></li>
                        <li><a href="../sub4_2.html">자원봉사</a></li>
                    </ul>
                </li>
            </ul>
            <ul class="join join2">
                  <?
                    if(!$userid) 
                    {
                  ?>
                   <li><a href="login_form.php">로그인</a></li>
                   <li><a href="../member/join.html">회원가입</a></li>
                  <?
                    }
                    else 
                    {
                  ?> 
                   <li class="name"><span><i class="fas fa-user"></i><?=$usernick?> </span></li>
                   <li><a href="logout.php">로그아웃</a></li>
                   <li><a href="member_form_modify.php">정보수정</a></li>
                   <?
                    }
                   ?>
            </ul>
            <a class="mclose" href="javascript:void(0);"><i class="fas fa-times"></i></a>
      </nav>
  </header>

<article id="content"> 
  <h2 class="hidden">회원정보수정</h2> 
	  <div id="wrapper" class="loginWrapper">
        <div class="loginWrap">
            <div class="wrap">
    
                <form name="member_form" method="post" action="modify.php" class="memberForm joinBox">
                    <label class="hidden">회원정보 수정</label>
                    <div class="idBox">
                        <p><?= $row[id] ?></p><!-- 로그인 된 상태-->
                        <span>한번 등록한 아이디는<br>변경이 불가능 합니다.</span>
                    </div>     
                    <div class="pwBox">
                        <label for="pass" class="hidden">비밀번호</label>
                        <input type="password" name="pass" id="pass" required value="" class="mb10 pwBg1" placeholder="비밀번호" title="비밀번호">
                        <label for="pass_confirm" class="hidden">비밀번호 확인</label>
                        <input type="password" name="pass_confirm" id="pass_confirm" class="pwBg2" placeholder="비밀번호 재확인" required value="" title="비밀번호 재확인">
                    </div> 
                    <div class="nameBox"> 
                        <label for="name" class="hidden">이름</label>
                        <input type="text" name="name" id="name" title="이름" placeholder="이름" required value=""> 
                    </div>
                    <div class="nameBox nameBox1">
                        <label for="nick" class="hidden">닉네임</label>
                        <input type="text" id="nick" name="nick" title="닉네임" placeholder="닉네임">
                        <span id="loadtext2"></span>
                    </div>    
                    <div class="telBox"> 
                        <label class="hidden" for="hp1">연락처 앞3자리</label>
                        <select name="hp1" id="hp1" title="연락처 앞3자리를 선택하세요.">
                            <option>010</option>
                            <option>011</option>
                            <option>016</option>
                            <option>017</option>
                            <option>018</option>
                            <option>019</option>
                        </select> ㅡ
                        <label class="hidden" for="hp2">연락처 가운데3자리</label>
                        <input type="text" class="hp" name="hp2" id="hp2" title="연락처 가운데3자리를 입력하세요." required value="1111"> ㅡ <label class="hidden" for="hp3">연락처 마지막3자리</label>
                        <input type="text" class="hp" name="hp3" id="hp3" title="연락처 마지막3자리를 입력하세요." required value="0000">
                    </div>
                    <div class="mailBox">
                        <label for="email1" class="hidden" >이메일</label>
                        <input type="text" id="email1" title="이메일 앞자리" name="email1" required value="1234">@
                        <label class="hidden" for="email2">이메일주소</label>
                        <input type="text" name="email2" id="email2" title="이메일 뒷자리" required value="0000">
                    </div>
                    <div class="subMit">
                        <input type="button" id="submitGo" onclick="check_input()" value="회원정보 수정완료" title="회원정보 수정완료">
                        <input  type="reset" onclick="reset_form()" value="다시 작성" title="회원정보 다시 작성">
                    </div>
                </form>
            </div>
        </div>
    </div>
</article>
<!-- 푸터 영역 -->
<footer id="footerArea">
  <ul>
      <li><a href="javascript:void(0);">개인정보처리방침</a></li>
      <li><a href="javascript:void(0);">운영약관</a></li>
      <li><a class="top_move" href="javascript:void(0);">TOP</a></li>
  </ul>
  <address>서울시 서대문구 연희로32길 51(연희동) 03718 <br>사업자 등록번호 : 110-83-01390<br>대표전화 : 02-330-8899 팩스 : 02-330-1736 <br>대표이메일 : namuadmin.sdm.go.kr</address>
  <p>Copyright &copy; by Seodaemun Museum Of Natural History.</p>
</footer>
</div>

<script src="../js/jquery-1.12.4.min.js"></script>
<script src="../js/jquery-migrate-1.4.1.min.js"></script>
<script src="../js/nav_new.js"></script>
<script src="../js/topmenu.js"></script>
 
</body>
</html>
