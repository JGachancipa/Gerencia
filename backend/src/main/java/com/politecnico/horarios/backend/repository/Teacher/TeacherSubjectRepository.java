package com.politecnico.horarios.backend.repository.Teacher;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

import com.politecnico.horarios.backend.model.Teacher.TeacherSubject;

@Repository
public interface TeacherSubjectRepository extends JpaRepository<TeacherSubject, Long> {
    @Query("SELECT ts FROM TeacherSubject ts WHERE ts.student.id = :studentId")
    List<TeacherSubject> findByStudentId(int studentId);
}
