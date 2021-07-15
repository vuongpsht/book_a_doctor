import {Subject} from 'rxjs';
import {SelectedDoctors, SelectedSymptom} from '../../types/DoctorStore';
import {constantData} from '../../constant/ConstantData';

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

  dispatchSelectedList(value: string) {
    if (!this.selectedDoctors?.find((e) => e === value)) {
      return (bookDoctorStore.selectedDoctors = [
        ...this.selectedDoctors,
        value,
      ]);
    } else {
      const tmp = [...this.selectedDoctors].filter((e) => e !== value);
      return (bookDoctorStore.selectedDoctors = tmp);
    }
  }

  dispatchSelectedSymptom(value: string) {
    if (!this.selectedSymptom?.find((e) => e === value)) {
      return (bookDoctorStore.selectedSymptom = [
        ...this.selectedSymptom,
        value,
      ]);
    } else {
      const tmp = [...this.selectedSymptom].filter((e) => e !== value);
      return (bookDoctorStore.selectedSymptom = tmp);
    }
  }

  dispatchFavoriteSymptom(value: string) {
    if (!this.favoriteSymptom?.find((e) => e === value)) {
      return (bookDoctorStore.favoriteSymptom = [
        ...this.selectedSymptom,
        value,
      ]);
    } else {
      const tmp = [...this.favoriteSymptom].filter((e) => e !== value);
      return (bookDoctorStore.favoriteSymptom = tmp);
    }
  }
}

export const bookDoctorStore = new BookDoctorStore();
