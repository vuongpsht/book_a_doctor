import {bookDoctorStore} from '../src/store/BookDoctorStore';
import {constantData} from '../src/constant/ConstantData';

it('init selected doctors should be zero', function () {
  expect(bookDoctorStore.selectedDoctors.length).toBe(0);
});

it('init selected symptom should be zero', function () {
  expect(bookDoctorStore.selectedSymptom.length).toBe(0);
});

it('init favorite should be 11', function () {
  expect(bookDoctorStore.favoriteSymptom.length).toBe(11);
});

it('init personal symptom should be 8', function () {
  expect(bookDoctorStore.personalSymptom.length).toBe(8);
});

it('selected doctor should add to selectedDoctors, add element name Ana', function () {
  bookDoctorStore.dispatchSelectedList('Ana');
  expect(bookDoctorStore.selectedDoctors[0]).toBe('Ana');
});

it('selected doctor should remove Ana from selectedDoctors', function () {
  bookDoctorStore.dispatchSelectedList('Ana');
  expect(bookDoctorStore.selectedDoctors.length).toBe(0);
});

it('selected symptom with first element of constant.symptomList[4]', function () {
  bookDoctorStore.dispatchToggleSelectedList(constantData.symptomList[4]);
  expect(bookDoctorStore.selectedSymptom[0]).toBe(constantData.symptomList[4]);
});

it('selected symptom length should be zero when re-dispatch', function () {
  bookDoctorStore.dispatchToggleSelectedList(constantData.symptomList[4]);
  expect(bookDoctorStore.selectedSymptom.length).toBe(0);
});

it("time should be {date: '17 July', hours: '12:02' }", function () {
  bookDoctorStore.dispatchBookingTime(1626498165845, '12:02');
  const target = {
    date: '17 July ',
    time: '12:02',
  };
  expect(bookDoctorStore.bookingTime).toStrictEqual(target);
});
