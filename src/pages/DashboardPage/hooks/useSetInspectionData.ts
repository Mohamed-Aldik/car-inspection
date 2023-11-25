import { Inspection } from '../../../types/inspection';
import { LocalStorageKeys } from '../../../utils/constants';

export const useSetInspectionData = () => {
  const getInspectionData = localStorage.getItem(LocalStorageKeys.inspections);

  const setNewInspection = (inspectionObj: Inspection) => {
    if (getInspectionData) {
      const data = JSON.parse(getInspectionData);
      data?.upcoming?.push(inspectionObj);

      localStorage.setItem(LocalStorageKeys.inspections, JSON.stringify(data));
    }
  };

  return { setNewInspection };
};
