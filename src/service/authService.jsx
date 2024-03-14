import axios from 'axios';

export const idCheckHandler = async (id) => {
    const idRegex = /^[a-z\d]{5,10}$/;
    if (id === '') {
      setIdError('아이디를 입력해주세요.');
      setIsIdAvailable(false);
      return false;
    } else if (!idRegex.test(id)) {
      setIdError('아이디는 5~10자의 영소문자, 숫자만 입력 가능합니다.');
      setIsIdAvailable(false);
      return false;
    }
    try {
      const responseData = await idDuplicateCheck(id);
      if (responseData) {
        setIdError('사용 가능한 아이디입니다.');
        setIsIdCheck(true);
        setIsIdAvailable(true);
        return true;
      } else {
        setIdError('이미 사용중인 아이디입니다.');
        setIsIdAvailable(false);
        return false;
      }
    } catch (error) {
      alert('서버 오류입니다. 관리자에게 문의하세요.');
      console.error(error);
      return false;
    }
};

export const passwordCheckHandler = (password, confirm) => {
    const passwordRegex = /^[a-z\d!@*&-_]{8,16}$/;
    if (password === '') {
      setPasswordError('비밀번호를 입력해주세요.');
      return false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError('비밀번호는 8~16자의 영소문자, 숫자, !@*&-_만 입력 가능합니다.');
      return false;
    } else if (confirm !== password) {
      setPasswordError('');
      setConfirmError('비밀번호가 일치하지 않습니다.');
      return false;
    } else {
      setPasswordError('');
      setConfirmError('');
      return true;
    }
};

export const signup = async (id, password, confirm) => {
    try {
        // 실제 서버에 회원가입 요청을 보내는 부분
        const response = await axios.post('http://localhost:8080/api/members/join', {
          id: id,
          password: password,
          confirm: confirm,
        });
    
        // 서버로부터의 응답 데이터를 반환
        return response.data; 
      } catch (error) {
        // 서버 요청 실패 시 예외 처리
        throw error;
      }
};
