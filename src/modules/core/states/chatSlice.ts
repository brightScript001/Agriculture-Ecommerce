import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isWidgetOpen: false,
  unreadCount: 0,
  activeConversation: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    toggleChatWidget: (state, action) => {
      state.isWidgetOpen =
        action.payload !== undefined ? action.payload : !state.isWidgetOpen;

      // Reset unread count when opening the widget
      if (state.isWidgetOpen) {
        state.unreadCount = 0;
      }
    },
    incrementUnreadCount: (state) => {
      state.unreadCount += 1;
    },
    setActiveConversation: (state, action) => {
      state.activeConversation = action.payload;
    },
  },
});

export const { toggleChatWidget, incrementUnreadCount, setActiveConversation } =
  chatSlice.actions;
export default chatSlice.reducer;
