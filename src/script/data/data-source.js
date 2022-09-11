import clubs from "./clubs.js";
class DataSource {
  static searchClub = function (keyword) {
    return new Promise((success, fail) => {
      const filteredClubs = clubs.filter((club) =>
        club.name.toUpperCase().includes(keyword.toUpperCase())
      );

      if (filteredClubs.length) {
        success(filteredClubs);
      } else {
        fail(`${keyword} is not found`);
      }
    });
  };
}

export default DataSource;

// function DataSource(onSuccess, onFailed) {
//   this.onSuccess = onSuccess;
//   this.onFailed = onFailed;
// }

// // DataSource.prototype.searchClub = function (keyword) {
// //   const filteredClubs = clubs.filter(function (club) {
// //     return club.name.toUpperCase().includes(keyword.toUpperCase());
// //   });

// //   if (filteredClubs.length) {
// //     this.onSuccess(filteredClubs);
// //   } else {
// //     this.onFailed(`${keyword} is not found`);
// //   }
// // };
// DataSource.prototype.searchClub = function (keyword) {
//   const filteredClubs = clubs.filter((club) =>
//     club.name.toUpperCase().includes(keyword.toUpperCase())
//   );

//   if (filteredClubs.length) {
//     this.onSuccess(filteredClubs);
//   } else {
//     this.onFailed(`${keyword} is not found`);
//   }
// };
