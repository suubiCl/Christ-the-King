import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import {
  BookOpen,
  Clock,
  Users,
  Target,
  Award,
  CheckCircle,
  Calendar,
  FileText,
  GraduationCap,
  Star,
  Download,
  MessageCircle
} from 'lucide-react';

const CourseOutline = () => {
  // Course data exactly as per the PDF from Ndejje University
  const diplomaData = {
    year1: {
      semester1: [
        { code: "DEC 1101", title: "Introduction to Early childhood Development", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DEC 1102", title: "Child Growth and Development", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DEC 1103", title: "Child Health and Nutrition", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DEC 1104", title: "Child Rearing Practice", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DPS 1101", title: "History of Education", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DPS 1102", title: "Comparative Education", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DCS 1101", title: "Communication Skills", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DCS 1102", title: "Curriculum Studies", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DCE 1101", title: "Computer Application 1", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DXE 1101", title: "Christian Ethics 1", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 }
      ],
      semester2: [
        { code: "DEC 1201", title: "Methods and Approaches of Teaching in ECD", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DEC 1202", title: "Early childhood Development Curricula", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DEC 1203", title: "Assessment and Evaluation", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DEC 1204", title: "Special Needs Education", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DEC 1205", title: "School Practice 1", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DPS 1201", title: "Sociology of Education", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DPS 1201", title: "Introduction to Philosophical Foundation", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DED 1202", title: "Educational Research Methods 1", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DEM 1204", title: "Entrepreneurship Development Skills", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DCE 1102", title: "Computer Application ll", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DXE 1202", title: "Christian Ethics ll", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DED 1201", title: "School Practice 1", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 }
      ]
    },
    year2: {
      semester1: [
        { code: "DEC 2101", title: "Home Management and Community Engagement", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DEC 2102", title: "Education Technology in ECD", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DEC 2103", title: "Language Education in ECD", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DEC 2104", title: "Mathematics Education in ECD", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DEC2105", title: "Setting up ECD Classroom Environment", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DEM 2101", title: "Education Administration and Management", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DPY 2102", title: "Human Growth, Development & Learning", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 }
      ],
      semester2: [
        { code: "DEC 2201", title: "Cultural Education", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DEC 2202", title: "Administration and Mgt of ECD Centres", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DEC 2203", title: "Plays an avenue of teaching ECD", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DEC 2204", title: "Development Studies", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DEC 2205", title: "School Practice 2", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DEC 2206", title: "Research/Project Report", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DED 2201", title: "Teachers' Professional Ethics", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DPY 2202", title: "Guidance and Counseling", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DED 2202", title: "School Practice ll", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "DED 2203", title: "Research Proposal", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 }
      ]
    }
  };

  const certificateData = {
    year1: {
      semester1: [
        { code: "CEC 1101", title: "Introduction to ECD", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "CEC 1102", title: "Child Growth and Development", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "CEC 1103", title: "Education Psychology", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "CEC 1104", title: "Education Technology", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "CEC 1105", title: "Language Development and Teaching", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "CXE XXXX", title: "Christian Ethics", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 }
      ],
      semester2: [
        { code: "CEC 1201", title: "Methods and Approaches teaching ECD", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "CEC 1202", title: "Pre – Primary Curriculum", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "CEC 1203", title: "Fieldwork and Child Study", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "CEC 1204", title: "Teaching Mathematics for Young Children", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "CEC 1205", title: "Material Development and Display", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "CEC 1206", title: "School 1", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 }
      ]
    },
    year2: {
      semester1: [
        { code: "CEC 2101", title: "Administration and Management of Pre-Primary Institutions", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "CEC 2102", title: "Child Health, Nutrition and Safety", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "CEC 2103", title: "Home Management", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "CEC 2104", title: "Foundation of Education", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "CEC 2105", title: "Information and communication Technology", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 },
        { code: "CXE XXXX", title: "Christian Ethics", lectureHours: 30, practicalHours: 10, contactHours: 2, creditUnits: 2 }
      ]
    }
  };

  const calculateTotalCredits = (semester) => {
    return semester.reduce((total, course) => total + course.creditUnits, 0);
  };

  const calculateTotalLectureHours = (semester) => {
    return semester.reduce((total, course) => total + course.lectureHours, 0);
  };

  const calculateTotalPracticalHours = (semester) => {
    return semester.reduce((total, course) => total + course.practicalHours, 0);
  };

  return (
    <div className="pt-20">
      <PageHeader
        title="Early Childhood Courses Programme Structures 2016"
        subtitle="Diploma and Certificate Programs - Affiliated with Ndejje University"
        backgroundImage="/gallery/WhatsApp Image 2025-07-04 at 6.31.01 PM.jpeg"
        icon={<BookOpen className="h-10 w-10 text-white" />}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">Programme Structures</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Early Childhood Development programmes preparing qualified professionals for the field
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-pink-50 p-8 rounded-xl text-center">
              <GraduationCap className="h-16 w-16 text-pink-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">Diploma in Early Childhood Development</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Duration:</strong> 2 Years (4 Semesters)</p>
                <p><strong>Total Courses:</strong> 39 Courses</p>
                <p><strong>Structure:</strong> LH (Lecture Hours), PH (Practical Hours), CH (Contact Hours), CU (Credit Units)</p>
              </div>
            </div>
            <div className="bg-pink-50 p-8 rounded-xl text-center">
              <Award className="h-16 w-16 text-pink-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">Certificate in Early Childhood Development</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Duration:</strong> 2 Years (3 Semesters)</p>
                <p><strong>Total Courses:</strong> 18 Courses</p>
                <p><strong>Structure:</strong> LH (Lecture Hours), PH (Practical Hours), CH (Contact Hours), CU (Credit Units)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diploma Courses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">1. DIPLOMA EARLY CHILDHOOD COURSES</h2>
            <p className="text-xl text-gray-600">Complete course structure for the Diploma programme</p>
          </div>

          {/* Year One Semester One */}
          <div className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-pink-300 to-pink-400 px-6 py-4">
                <h3 className="text-2xl font-bold text-indigo-900">YEAR ONE; SEMESTER ONE</h3>
                <p className="text-indigo-800">
                  Total Credits: {calculateTotalCredits(diplomaData.year1.semester1)} |
                  Total Lecture Hours: {calculateTotalLectureHours(diplomaData.year1.semester1)} |
                  Total Practical Hours: {calculateTotalPracticalHours(diplomaData.year1.semester1)}
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">CODE</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">NAME</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">LH</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">PH</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">CH</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">CU</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {diplomaData.year1.semester1.map((course, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-indigo-800">{course.code}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{course.title}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.lectureHours}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.practicalHours}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.contactHours}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.creditUnits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Year One Semester Two */}
          <div className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-pink-300 to-pink-400 px-6 py-4">
                <h3 className="text-2xl font-bold text-indigo-900">YEAR ONE; SEMESTER TWO</h3>
                <p className="text-indigo-800">
                  Total Credits: {calculateTotalCredits(diplomaData.year1.semester2)} |
                  Total Lecture Hours: {calculateTotalLectureHours(diplomaData.year1.semester2)} |
                  Total Practical Hours: {calculateTotalPracticalHours(diplomaData.year1.semester2)}
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">CODE</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">NAME</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">LH</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">PH</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">CH</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">CU</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {diplomaData.year1.semester2.map((course, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-indigo-800">{course.code}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{course.title}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.lectureHours}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.practicalHours}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.contactHours}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.creditUnits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Year Two Semester One */}
          <div className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
                <h3 className="text-2xl font-bold text-white">YEAR TWO; SEMESTER ONE</h3>
                <p className="text-indigo-100">
                  Total Credits: {calculateTotalCredits(diplomaData.year2.semester1)} |
                  Total Lecture Hours: {calculateTotalLectureHours(diplomaData.year2.semester1)} |
                  Total Practical Hours: {calculateTotalPracticalHours(diplomaData.year2.semester1)}
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">CODE</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">NAME</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">LH</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">PH</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">CH</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">CU</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {diplomaData.year2.semester1.map((course, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-indigo-800">{course.code}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{course.title}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.lectureHours}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.practicalHours}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.contactHours}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.creditUnits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Year Two Semester Two */}
          <div className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
                <h3 className="text-2xl font-bold text-white">YEAR TWO; SEMESTER TWO</h3>
                <p className="text-indigo-100">
                  Total Credits: {calculateTotalCredits(diplomaData.year2.semester2)} |
                  Total Lecture Hours: {calculateTotalLectureHours(diplomaData.year2.semester2)} |
                  Total Practical Hours: {calculateTotalPracticalHours(diplomaData.year2.semester2)}
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">CODE</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">NAME</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">LH</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">PH</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">CH</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">CU</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {diplomaData.year2.semester2.map((course, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-indigo-800">{course.code}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{course.title}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.lectureHours}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.practicalHours}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.contactHours}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.creditUnits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-indigo-800 mb-4">2. CERTIFICATE IN EARLY CHILDHOOD DEVELOPMENT</h2>
            <p className="text-xl text-gray-600">Complete course structure for the Certificate programme</p>
          </div>

          {/* Certificate Year One Semester One */}
          <div className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-400 to-green-500 px-6 py-4">
                <h3 className="text-2xl font-bold text-white">YEAR ONE; SEMESTER ONE</h3>
                <p className="text-green-100">
                  Total Credits: {calculateTotalCredits(certificateData.year1.semester1)} |
                  Total Lecture Hours: {calculateTotalLectureHours(certificateData.year1.semester1)} |
                  Total Practical Hours: {calculateTotalPracticalHours(certificateData.year1.semester1)}
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">CODE & NAME</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">LH</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">PH</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">CH</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">CU</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {certificateData.year1.semester1.map((course, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">
                          <span className="font-medium text-indigo-800">{course.code}</span> {course.title}
                        </td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.lectureHours}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.practicalHours}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.contactHours}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.creditUnits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Certificate Year One Semester Two */}
          <div className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-400 to-green-500 px-6 py-4">
                <h3 className="text-2xl font-bold text-white">YEAR ONE; SEMESTER TWO</h3>
                <p className="text-green-100">
                  Total Credits: {calculateTotalCredits(certificateData.year1.semester2)} |
                  Total Lecture Hours: {calculateTotalLectureHours(certificateData.year1.semester2)} |
                  Total Practical Hours: {calculateTotalPracticalHours(certificateData.year1.semester2)}
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">CODE & NAME</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">LH</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">PH</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">CH</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">CU</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {certificateData.year1.semester2.map((course, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">
                          <span className="font-medium text-indigo-800">{course.code}</span> {course.title}
                        </td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.lectureHours}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.practicalHours}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.contactHours}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.creditUnits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Certificate Year Two Semester One */}
          <div className="mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-4">
                <h3 className="text-2xl font-bold text-white">YEAR TWO; SEMESTER ONE</h3>
                <p className="text-teal-100">
                  Total Credits: {calculateTotalCredits(certificateData.year2.semester1)} |
                  Total Lecture Hours: {calculateTotalLectureHours(certificateData.year2.semester1)} |
                  Total Practical Hours: {calculateTotalPracticalHours(certificateData.year2.semester1)}
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">CODE & NAME</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">LH</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">PH</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">CH</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">CU</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {certificateData.year2.semester1.map((course, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">
                          <span className="font-medium text-indigo-800">{course.code}</span> {course.title}
                        </td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.lectureHours}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.practicalHours}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.contactHours}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-900">{course.creditUnits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-pink-300 to-pink-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-indigo-900 mb-6">Ready to Begin Your ECD Career?</h2>
          <p className="text-xl text-indigo-800 mb-8 max-w-3xl mx-auto">
            Choose from our comprehensive Early Childhood Development programmes and become a qualified professional in nurturing young minds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center justify-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Us
            </Link>
            <a
              href="/ECD_Course_Outline.pdf"
              download="Christ_the_King_ECD_Course_Outline.pdf"
              className="bg-transparent border-2 border-indigo-900 hover:bg-indigo-900 hover:text-white text-indigo-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors inline-flex items-center justify-center"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Course Outline
            </a>
          </div>
          <div className="mt-8 text-indigo-800 space-y-2">
            <p className="text-lg font-semibold">Diploma Programme: 2 Years (4 Semesters) | 39 Courses</p>
            <p className="text-lg font-semibold">Certificate Programme: 2 Years (3 Semesters) | 18 Courses</p>
            <p className="text-base">Affiliated with Ndejje University | Programme Structures 2016</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseOutline;
