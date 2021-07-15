// useRxStore instead

// import {useEffect, useState} from 'react';
// import {bookDoctorStore} from '../store/BookDoctorStore';
// import {SelectedDoctors, SelectedSymptom} from '../types/DoctorStore';
//
// export const useBookDoctor = () => {
//   const [selectedDoctor, setSelectedDoctor] = useState<SelectedDoctors>(
//     bookDoctorStore.selectedDoctors,
//   );
//
//   useEffect(() => {
//     const sub = bookDoctorStore.selectedDoctorsSubject.subscribe((e) => {
//       if (e !== selectedDoctor) setSelectedDoctor(e);
//     });
//     return () => {
//       sub.unsubscribe();
//     };
//   }, []);
//   return {selectedDoctor};
// };
//
// export const useBookDoctorSymptom = () => {
//   const [selectedSymptom, setSelectedSymptom] = useState<SelectedSymptom>(
//     bookDoctorStore.selectedSymptom,
//   );
//
//   useEffect(() => {
//     const sub = bookDoctorStore.selectedSymptomSubject.subscribe((v) => {
//       console.log({v});
//       if (v !== selectedSymptom) return setSelectedSymptom(v);
//     });
//     return () => {
//       sub.unsubscribe();
//     };
//   });
//   return {selectedSymptom};
// };
//
// export const useBookDoctorFavoriteSymptom = () => {
//   const [favoriteSymptom, setFavoriteSymptom] = useState<SelectedSymptom>(
//     bookDoctorStore.favoriteSymptom,
//   );
//
//   useEffect(() => {
//     const sub = bookDoctorStore.favoriteSymptomSubject.subscribe((v) => {
//       if (v !== favoriteSymptom) return setFavoriteSymptom(v);
//     });
//     return () => {
//       sub.unsubscribe();
//     };
//   });
//   return {favoriteSymptom};
// };
