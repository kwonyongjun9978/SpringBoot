package com.example.demo;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="board")
@Data
@SequenceGenerator(name = "BOARD_SEQ_GENERATOR",
					sequenceName = "BOARD_SEQ",
					initialValue = 1,
					allocationSize = 1)
public class BoardDTO {
	@Id
	@Column(name="seq")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "BOARD_SEQ_GENERATOR")
	private int seq;
	
	//@Id //primary key로 설정
	@Column(name="id", nullable = false, unique = true, length = 30)
	private String id;
	
	@Column(name="name", nullable = false, length = 30)
	private String name;
	
	@Column(name="subject")
	private String subject;
	
	@Column(name="content")
	private String content;
	
	@CreationTimestamp //엔티티가 생성되는 시점
	private Timestamp logtime;
}
