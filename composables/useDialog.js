import { ref, reactive, markRaw, onMounted, onUnmounted, defineAsyncComponent } from 'vue';

// 用於存儲對話框的相關數據
export const dataDialog = reactive({
  contentComponent: null, // 動態渲染的組件
  cancel: {
    btnName: "╳",
    onComplete: () => {},
  },
});

const dialogRef = ref(null); // 用於存儲對話框的 DOM 元素

export const useDialog = () => {
  // 開啟對話框並動態加載指定組件
  const open = (dialogId) => {
    switch (dialogId) {
      case 'dialog1':
        dataDialog.contentComponent = markRaw(
          defineAsyncComponent(() => import('@/components/Dialog/Dialog1Content.vue'))
        );
        break;
      case 'dialog2':
        dataDialog.contentComponent = markRaw(
          defineAsyncComponent(() => import('@/components/Dialog/Dialog2Content.vue'))
        );
        break;
      case 'dialog3':
        dataDialog.contentComponent = markRaw(
          defineAsyncComponent(() => import('@/components/Dialog/Dialog3Content.vue'))
        );
        break;
      case 'dialog4':
        dataDialog.contentComponent = markRaw(
          defineAsyncComponent(() => import('@/components/Dialog/Dialog4Content.vue'))
        );
        break;
      default:
        dataDialog.contentComponent = null;
        break;
    }
    if (dialogRef.value) dialogRef.value.showModal(); // 顯示對話框
  };

  // 關閉對話框並清空內容
  const close = () => {
    dataDialog.contentComponent = null; // 清空內容
    if (dialogRef.value) dialogRef.value.close();
  };

  // 處理背景點擊事件
  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.value) close();
  };

  // 組件掛載時添加事件監聽器
  onMounted(() => {
    if (dialogRef.value) {
      dialogRef.value.addEventListener('click', handleBackdropClick);
    }
  });

  // 組件卸載時移除事件監聽器
  onUnmounted(() => {
    if (dialogRef.value) {
      dialogRef.value.removeEventListener('click', handleBackdropClick);
    }
  });

  return { open, close, dialogRef }; // 將方法和引用返回
};
