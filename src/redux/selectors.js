// файл объявления функций-селекторов
//Один и тот же селектор может использоваться в нескольких местах приложения,
// Чтобы избежать этого и еще больше структурировать код, все функции-селекторы объявляются в отдельном файле,

export const getTasks = state => state.tasks.items;
export const getIsLoading = state => state.tasks.isLoading;
export const getError = state => state.tasks.error;
export const getStatusFilter = state => state.filters.status;
