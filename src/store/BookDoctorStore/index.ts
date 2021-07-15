import {Subject} from 'rxjs';
import {
  BookingTime,
  SelectedDoctors,
  SelectedSymptom,
} from '../../types/DoctorStore';
import {constantData} from '../../constant/ConstantData';
import {
  processDispatchArray,
  processDispatchBookingTime,
} from '../../utils/storeHelper';

class BookDoctorStore {
  private _selectedDoctors: SelectedDoctors = [];
  private _selectedDoctorsSubject: Subject<SelectedDoctors> =
    new Subject<SelectedDoctors>();

  private _selectedSymptom: SelectedSymptom = [];
  private _selectedSymptomSubject: Subject<SelectedSymptom> =
    new Subject<SelectedSymptom>();

  private _favoriteSymptom: SelectedSymptom = constantData.symptomList;
  private _favoriteSymptomSubject: Subject<SelectedSymptom> =
    new Subject<SelectedSymptom>();

  private _bookingTime: BookingTime | undefined;
  private _bookingTimeSubject: Subject<BookingTime | undefined> = new Subject<
    BookingTime | undefined
  >();

  get selectedDoctors(): SelectedDoctors {
    return this._selectedDoctors;
  }

  set selectedDoctors(value: SelectedDoctors) {
    this._selectedDoctors = value;
    this.selectedDoctorsSubject.next(value);
  }

  get selectedDoctorsSubject(): Subject<SelectedDoctors> {
    return this._selectedDoctorsSubject;
  }

  get selectedSymptom(): SelectedSymptom {
    return this._selectedSymptom;
  }

  set selectedSymptom(value: SelectedSymptom) {
    this._selectedSymptom = value;
    this.selectedSymptomSubject.next(value);
  }

  get selectedSymptomSubject(): Subject<SelectedSymptom> {
    return this._selectedSymptomSubject;
  }

  get favoriteSymptom(): SelectedSymptom {
    return this._favoriteSymptom;
  }

  set favoriteSymptom(value: SelectedSymptom) {
    this._favoriteSymptom = value;
    this.favoriteSymptomSubject.next(value);
  }

  get favoriteSymptomSubject(): Subject<SelectedSymptom> {
    return this._favoriteSymptomSubject;
  }

  get bookingTime(): BookingTime | undefined {
    return this._bookingTime;
  }

  set bookingTime(value: BookingTime | undefined) {
    this._bookingTime = value;
    this.bookingTimeSubject.next(value);
  }

  get bookingTimeSubject(): Subject<BookingTime | undefined> {
    return this._bookingTimeSubject;
  }
  dispatchSelectedList(value: string) {
    bookDoctorStore.selectedDoctors = processDispatchArray(
      value,
      this.selectedDoctors,
    );
  }
  dispatchToggleSelectedList(value: string) {
    bookDoctorStore.selectedSymptom = processDispatchArray(
      value,
      this.selectedSymptom,
    );
    bookDoctorStore.favoriteSymptom = processDispatchArray(
      value,
      this.favoriteSymptom,
    );
  }
  dispatchBookingTime(d: number, h: string) {
    bookDoctorStore.bookingTime = processDispatchBookingTime(d, h);
  }
}

export const bookDoctorStore = new BookDoctorStore();
