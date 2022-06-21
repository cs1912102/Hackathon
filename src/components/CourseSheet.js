import React from "react";
import courses from "./listCourses";
import AutoCompleteText from "./AutoCompleteText";

const CourseSheet = () => {
    let sems = [
      { sno: 1, name: "1st" },
      { sno: 2, name: "2nd" },
      { sno: 3, name: "3rd" },
      { sno: 4, name: "4th" },
      { sno: 5, name: "5th" },
      { sno: 6, name: "6th" },
      { sno: 7, name: "7th" },
      { sno: 8, name: "8th" },
    ];
  return (
    <div>
      <table>
      <tbody>
          
          <tr>
            <th style={{ width: "75px" }}>Code</th>
            <th style={{ width: "450px" }}>Title</th>
            <th style={{ width: "25px", textAlign: "center" }}>Cr</th>
          </tr>
          {sems.map((c) => {
            return (
            <><tr>
              <th></th>
              <th colspan="3" style={{ fontWeight: "bold" }}>
                {c.name} Semester
              </th>
            </tr>
            <tr>
              <td></td>
              <td style={{ height: "25px" }}><AutoCompleteText items={courses.filter((co)=>(co.semester===c.sno))} /></td>
              <td>  </td>
            </tr></>
            );})}
        </tbody>
      </table>
    </div>
  );
};

export default CourseSheet;
