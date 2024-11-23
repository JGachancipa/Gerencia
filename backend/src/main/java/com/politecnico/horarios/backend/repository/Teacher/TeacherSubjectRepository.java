package com.politecnico.horarios.backend.repository.Teacher;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.politecnico.horarios.backend.model.Teacher.TeacherSubject;
import com.politecnico.horarios.backend.model.Teacher.TeacherSubjectId;

@Repository
public interface TeacherSubjectRepository extends JpaRepository<TeacherSubject, TeacherSubjectId> {

    @Query("SELECT ts FROM TeacherSubject ts WHERE ts.student.studentId = :studentId")
    List<TeacherSubject> findByStudentId(int studentId);

    @Query("SELECT ts FROM TeacherSubject ts JOIN FETCH ts.teacher JOIN FETCH ts.subject")
    List<TeacherSubject> findAllWithTeachersAndSubjects();

}