package com.politecnico.horarios.backend.repository.Student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.politecnico.horarios.backend.model.Student.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
}
