// --------------------------------------------------------------------------
// ✅ 데이터 뮤테이션
// --------------------------------------------------------------------------
// - [ ] PocketBase 백엔드 솔루션을 서버로 사용합니다.
// - [ ] 이벤트를 사용해 Promise 또는 Async / await 방법으로 데이터 뮤테이션을 요청합니다.
// - [ ] 데이터 뮤테이션 요청 응답이 성공인 경우, 리액트 앱 화면을 업데이트 합니다.
// - [ ] 데이터 뮤테이션 요청 응답에 문제가 발생한 경우, 오류 메시지를 렌더링합니다.
// --------------------------------------------------------------------------

import S from './DataMutation.module.css';
import { useRef } from 'react';
import {
  createNote,
  readNotes,
  readNoteOne,
  updateNote,
  deleteNote,
} from '@/api/notes';
function DataMutation() {
  const formRef = useRef();

  const handleCreate = async () => {
    const formElement = formRef.current;
    const formData = new FormData(formElement);
    const title = formData.get('title');
    const description = formData.get('description');

    // 더미 생성할 노트
    const newNote = {
      title,
      description,
    };

    // 서버 요청
    const responseData = await createNote(newNote);
    formElement.reset();
  };
  const handleReadNote = async () => {
    const responseData = await readNotes();
    console.log(responseData);
  };

  const handleReadNoteOne = async () => {
    const responseData = await readNoteOne('qsqbe6gjz3kj23k');
    console.log(responseData);
  };

  const handleEditNote = async () => {
    const editNoteId = 'qsqbe6gjz3kj23k';
    const editNote = {
      id: editNoteId,
      title: '오늘도 파이팅!',
      // description: '왜이렇게 피곤하고 머리가 아프고 힘이 안나냐',
    };
    const responseData = await updateNote(editNote);
    console.log(responseData);
  };

  const handleDeleteNote = async () => {
    const responseData = await deleteNote('qsqbe6gjz3kj23k');
    alert('노트 삭제 성공');
  };
  return (
    <div className={S.component}>
      <form ref={formRef}>
        <div>
          <label htmlFor="noteTitle">제목</label>
          <input type="text" name="title" id="noteTitle" />
        </div>
        <div>
          <label htmlFor="noteDescription">내용</label>
          <textarea
            name="description"
            id="noteDescription"
            cols={20}
            rows={3}
          ></textarea>
        </div>
      </form>
      <div
        role="group"
        style={{
          display: 'flex',
          gap: '8px',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <button type="button" onClick={handleCreate}>
          노트 작성
        </button>
        <button type="button" onClick={handleReadNote}>
          노트 읽기
        </button>
        <button type="button" onClick={handleReadNoteOne}>
          노트 ID 하나만 읽기
        </button>
        <button type="button" onClick={handleEditNote}>
          노트 데이터 수정하기
        </button>
        <button type="button" onClick={handleDeleteNote}>
          노트 데이터 삭제하기
        </button>
      </div>
    </div>
  );
}
// <code>qsqbe6gjz3kj23k</code>
export default DataMutation;
