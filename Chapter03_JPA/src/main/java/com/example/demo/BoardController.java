package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardController {
	@Autowired
	private BoardService boardService;
	
	@GetMapping(value="/board/Write")
	public String write() {
		boardService.write();
		return "게시판 등록 성공"; //문자열을 브라우저에 뿌린다.
	}
	
	@GetMapping(value="/board/getBoardList")
	public List<BoardDTO> getBoardList() {
		List<BoardDTO> list = boardService.getBoardList();
		return list;
	}
}


//게시판 등록 성공.jsp 로 가는 것이 아니라 "게시판 등록 성공"을 문자열로 취급
//@RestController을 쓰면 @ResponseBody를 쓰지않아도 된다.
