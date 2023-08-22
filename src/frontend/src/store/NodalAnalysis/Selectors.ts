import { NodalAnalysisState } from "./Slices";
import { RootState } from "../store";

export const nodalAnalysisStateSelector = (state: RootState): NodalAnalysisState => state.nodalAnalysis;