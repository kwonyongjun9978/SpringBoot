package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardServiceImpl implements BoardService {
	@Autowired
	private BoardDAO boardDAO; 
	
	@Override
	public void write() {
		BoardDTO boardDTO = new BoardDTO();
		boardDTO.setId("111");
		boardDTO.setName("aaa");
		boardDTO.setSubject("해윙");
		boardDTO.setContent("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
		
		boardDAO.save(boardDTO);
		
		boardDTO.setId("222");
		boardDTO.setName("용준2");
		boardDTO.setSubject("하잉");
		boardDTO.setContent("zzzzzzasdfzzzzzzzzzzzzzzzzzzzzzzdfsdfdfzzzzz");
		
		boardDAO.save(boardDTO);
	}

	@Override
	public List<BoardDTO> getBoardList() {
		return boardDAO.findAll();
	}

}
