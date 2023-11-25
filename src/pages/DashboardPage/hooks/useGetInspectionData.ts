import { useEffect, useState } from "react";
import { initialInspectionData } from '../../../assets/inspectionData';
import { Inspection } from "../../../types/inspection";
import { LocalStorageKeys } from "../../../utils/constants";

export const useGetInspectionData = (): { upcoming: Inspection[], history: Inspection[] } => {
    const getInspectionData = localStorage.getItem(LocalStorageKeys.inspections);

    const [storedValue, setStoredValue] = useState(localStorage.getItem(LocalStorageKeys.inspections) ?? null);

    useEffect(() => {
        if (!getInspectionData) {
            localStorage.setItem(LocalStorageKeys.inspections, JSON.stringify(initialInspectionData));
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const newValue = localStorage.getItem(LocalStorageKeys.inspections)
            if (newValue !== storedValue) {
                // Update the stored value in state when it changes
                setStoredValue(newValue);
            }
        }, 1000); // Poll every second for changes

        return () => {
            clearInterval(interval);
        };
    }, [storedValue]);

    if (getInspectionData) return JSON.parse(getInspectionData);

    return {
        upcoming: [],
        history: []
    }
}