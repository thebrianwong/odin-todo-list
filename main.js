(()=>{"use strict";const e=e=>({completed:!1,toggle:()=>{e.completed?e.completed=!1:e.completed=!0},getCompletedState:()=>e.completed});let t={};Object.assign(t,e(t)),console.log(t),console.log(t.getCompletedState()),console.log(t.toggle()),console.log(t.getCompletedState()),console.log(t);let o=(l="ddtest",{getTaskDescription:()=>l,setTaskDescription:e=>{l=e}});var l;console.log(o),Object.assign(o,e(o)),o.getCompletedState()?console.log(o.getCompletedState(),"this is now true"):console.log(o.getCompletedState(),"this is still false"),console.log(o.getCompletedState()),console.log(o.toggle()),console.log(o.getCompletedState()),o.getCompletedState()?console.log(o.getCompletedState(),"this is now true"):console.log(o.getCompletedState(),"this is still false"),console.log(o.getCompletedState()),console.log(o),console.log(o.completed),console.log(typeof o)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBRUEsTUMyQ01BLEVBQWVDLElBQVcsQ0FDNUJDLFdBQVcsRUFDWEMsT0FBUSxLQUNBRixFQUFPQyxVQUNQRCxFQUFPQyxXQUFZLEVBRW5CRCxFQUFPQyxXQUFZLENBQ3RCLEVBRUxFLGtCQUFtQixJQUNSSCxFQUFPQyxZQ2hEdEIsSUFBSUcsRUFBUSxDQUFDLEVBQ2JDLE9BQU9DLE9BQU9GLEVBQU9MLEVBQVlLLElBQ2pDRyxRQUFRQyxJQUFJSixHQUNaRyxRQUFRQyxJQUFJSixFQUFNRCxxQkFDbEJJLFFBQVFDLElBQUlKLEVBQU1GLFVBQ2xCSyxRQUFRQyxJQUFJSixFQUFNRCxxQkFDbEJJLFFBQVFDLElBQUlKLEdBR1osSUFBSUssR0ZkeUJDLEVFY0UsU0ZjcEIsQ0FBRUMsbUJBdkJrQixJQUNoQkQsRUFzQmtCRSxtQkFwQkRDLElBQ3hCSCxFQUFjRyxDQUFjLElBVFIsSUFBQ0gsRUVlN0JILFFBQVFDLElBQUlDLEdBTVpKLE9BQU9DLE9BQU9HLEVBQU1WLEVBQVlVLElBRTVCQSxFQUFLTixvQkFDTEksUUFBUUMsSUFBSUMsRUFBS04sb0JBQW9CLG9CQUVyQ0ksUUFBUUMsSUFBSUMsRUFBS04sb0JBQW9CLHVCQUd6Q0ksUUFBUUMsSUFBSUMsRUFBS04scUJBU2pCSSxRQUFRQyxJQUFJQyxFQUFLUCxVQUdqQkssUUFBUUMsSUFBSUMsRUFBS04scUJBU2JNLEVBQUtOLG9CQUNMSSxRQUFRQyxJQUFJQyxFQUFLTixvQkFBb0Isb0JBRXJDSSxRQUFRQyxJQUFJQyxFQUFLTixvQkFBb0IsdUJBR3pDSSxRQUFRQyxJQUFJQyxFQUFLTixxQkFFakJJLFFBQVFDLElBQUlDLEdBRVpGLFFBQVFDLElBQUlDLEVBQUtSLFdBQ2pCTSxRQUFRQyxXQUFXQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY2hlY2tsaXN0X3Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY29tcGxldGVfY29tcG9uZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbkNvbXBsZXRlIH0gZnJvbSBcIi4vY29tcGxldGVfY29tcG9uZW50XCI7XG5cbmNvbnN0IGNoZWNrbGlzdFRhc2tPYmplY3QgPSAoZGVzY3JpcHRpb24pID0+IHtcbiAgICAvLyBsZXQgc3RhdGUgPSB7XG4gICAgLy8gICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAvLyB9XG4gICAgLy8gbGV0IGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGdldFRhc2tEZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgIH07XG4gICAgY29uc3Qgc2V0VGFza0Rlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgfTtcbiAgICBcbiAgICAvLyBjb25zdCB0b2dnbGVDb21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgLy8gICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAvLyAgICAgICAgIGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcbiAgICAvLyAgICAgfTtcbiAgICAvLyB9O1xuICAgIC8vIGNvbnN0IGdldENvbXBsZXRlZCA9ICgpID0+IHtcbiAgICAvLyAgICAgcmV0dXJuIGNvbXBsZXRlZDtcbiAgICAvLyB9O1xuXG4gICAgLy8gY29uc29sZS5sb2coc2VsZilcbiAgICAvLyBjb25zdCB7Y2FuQ29tcGxldGV9ID0gY2FuQ29tcGxldGUoc3RhdGUpO1xuICAgIC8vIE9iamVjdC5hc3NpZ24oc3RhdGUsIGNhbkNvbXBsZXRlKHN0YXRlKSlcbiAgICAvLyBPYmplY3QuYXNzaWduKGNvbXBsZXRlZCwgY2FuQ29tcGxldGUoY29tcGxldGVkKSlcbiAgICAvLyByZXR1cm4geyBnZXRUYXNrRGVzY3JpcHRpb24sIHNldFRhc2tEZXNjcmlwdGlvbiwgdG9nZ2xlQ29tcGxldGVkLCBnZXRDb21wbGV0ZWQgfTtcbiAgICByZXR1cm4geyBnZXRUYXNrRGVzY3JpcHRpb24sIHNldFRhc2tEZXNjcmlwdGlvbiB9O1xuICAgIC8vIHJldHVybiBPYmplY3QuYXNzaWduKHsgZ2V0VGFza0Rlc2NyaXB0aW9uLCBzZXRUYXNrRGVzY3JpcHRpb24sIHRvZ2dsZUNvbXBsZXRlZCwgZ2V0Q29tcGxldGVkLCBjYW5Db21wbGV0ZSB9LCBjYW5Db21wbGV0ZSlcbn07XG5cbi8vIE9iamVjdC5hc3NpZ24oY2hlY2tsaXN0VGFza09iamVjdC5wcm90b3R5cGUsIGNhbkNvbXBsZXRlKTtcblxuZXhwb3J0IHsgY2hlY2tsaXN0VGFza09iamVjdCB9OyIsIi8qIGNvbnN0IGNhbkNvbXBsZXRlID0gKHN0YXRlKSA9PiAoe1xuICAgIHRvZ2dsZTogKCkgPT4ge1xuICAgICAgICAvLyBpZiAoc3RhdGUuY29tcGxldGVkKSB7XG4gICAgICAgIC8vICAgICBzdGF0ZS5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIHN0YXRlLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIC8vIH07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaXQgd29ya3NcIik7XG4gICAgLy8gfTtcbiAgICBpZiAoc3RhdGUuY29tcGxldGVkKSB7XG4gICAgICAgIHN0YXRlLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgfTtcbiAgICAvLyByZXR1cm4geyB0b2dnbGUgfTtcbiAgICB9XG59KTsgKi9cblxuLy8gY29uc3QgY2FuQ29tcGxldGUgPSAob2JqZWN0KSA9PiAoe1xuLy8gICAgIHRvZ2dsZTogKCkgPT4ge1xuLy8gICAgICAgICBpZiAob2JqZWN0LnN0YXRlLmNvbXBsZXRlZCkge1xuLy8gICAgICAgICAgICAgb2JqZWN0LnN0YXRlLmNvbXBsZXRlZCA9IGZhbHNlO1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgb2JqZWN0LnN0YXRlLmNvbXBsZXRlZCA9IHRydWU7XG4vLyAgICAgICAgIH07XG4vLyAgICAgfSxcbi8vICAgICBnZXRDb21wbGV0ZWRTdGF0ZTogKCkgPT4ge1xuLy8gICAgICAgICByZXR1cm4gb2JqZWN0LnN0YXRlLmNvbXBsZXRlZFxuLy8gICAgIH1cbi8vIH0pO1xuXG4vLyBjb25zdCBjYW5Db21wbGV0ZSA9IChvYmplY3QpID0+ICh7XG4vLyAgICAgY29tcGxldGVkOiBmYWxzZSxcbi8vICAgICB0b2dnbGU6ICgpID0+IHtcbi8vICAgICAgICAgaWYgKG9iamVjdC5jb21wbGV0ZWQpIHtcbi8vICAgICAgICAgICAgIG9iamVjdC5jb21wbGV0ZWQgPSBmYWxzZTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIG9iamVjdC5jb21wbGV0ZWQgPSB0cnVlO1xuLy8gICAgICAgICB9O1xuLy8gICAgIH0sXG4vLyAgICAgZ2V0Q29tcGxldGVkU3RhdGU6ICgpID0+IHtcbi8vICAgICAgICAgcmV0dXJuIG9iamVjdC5jb21wbGV0ZWRcbi8vICAgICB9XG4vLyB9KTtcblxuY29uc3QgY2FuQ29tcGxldGUgPSAob2JqZWN0KSA9PiAoe1xuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgdG9nZ2xlOiAoKSA9PiB7XG4gICAgICAgIGlmIChvYmplY3QuY29tcGxldGVkKSB7XG4gICAgICAgICAgICBvYmplY3QuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmplY3QuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGdldENvbXBsZXRlZFN0YXRlOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBvYmplY3QuY29tcGxldGVkXG4gICAgfVxufSk7XG5cbi8vIGNvbnN0IGNhbkNvbXBsZXRlID0gKG9iamVjdCkgPT4ge1xuLy8gICAgIGNvbnN0IG9iaiA9IHtcbi8vICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbi8vICAgICAgICAgdG9nZ2xlOiAoKSA9PiB7XG4vLyAgICAgICAgICAgICBpZiAob2JqZWN0LmNvbXBsZXRlZCkge1xuLy8gICAgICAgICAgICAgICAgIG9iamVjdC5jb21wbGV0ZWQgPSBmYWxzZTtcbi8vICAgICAgICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgICAgICAgICAgb2JqZWN0LmNvbXBsZXRlZCA9IHRydWU7XG4vLyAgICAgICAgICAgICB9O1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBnZXRDb21wbGV0ZWRTdGF0ZTogKCkgPT4ge1xuLy8gICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5jb21wbGV0ZWRcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICByZXR1cm4gb2JqXG4vLyB9O1xuXG5leHBvcnQgeyBjYW5Db21wbGV0ZSB9OyIsImltcG9ydCB7IHRvRG9JdGVtIH0gZnJvbSBcIi4vdG9kb19pdGVtXCI7XG5pbXBvcnQgeyBjaGVja2xpc3RPYmplY3QgfSBmcm9tIFwiLi9jaGVja2xpc3RcIjtcbmltcG9ydCB7IGNoZWNrbGlzdFRhc2tPYmplY3QgfSBmcm9tIFwiLi9jaGVja2xpc3RfdGFza1wiO1xuaW1wb3J0IHsgY2FuQ29tcGxldGUgfSBmcm9tIFwiLi9jb21wbGV0ZV9jb21wb25lbnRcIjtcblxuXG5cbmxldCBqaW1ibyA9IHt9XG5PYmplY3QuYXNzaWduKGppbWJvLCBjYW5Db21wbGV0ZShqaW1ibykpXG5jb25zb2xlLmxvZyhqaW1ibylcbmNvbnNvbGUubG9nKGppbWJvLmdldENvbXBsZXRlZFN0YXRlKCkpXG5jb25zb2xlLmxvZyhqaW1iby50b2dnbGUoKSlcbmNvbnNvbGUubG9nKGppbWJvLmdldENvbXBsZXRlZFN0YXRlKCkpXG5jb25zb2xlLmxvZyhqaW1ibylcblxuXG5sZXQgdGVzdCA9IGNoZWNrbGlzdFRhc2tPYmplY3QoXCJkZHRlc3RcIik7XG5jb25zb2xlLmxvZyh0ZXN0KVxuLy8gY29uc29sZS5sb2codGVzdC5jb21wbGV0ZWQpXG5cbi8vIGNvbnNvbGUubG9nKHRlc3Quc3RhdGUpXG5cbi8vIGNvbnNvbGUubG9nKHRlc3QpXG5PYmplY3QuYXNzaWduKHRlc3QsIGNhbkNvbXBsZXRlKHRlc3QpKVxuXG5pZiAodGVzdC5nZXRDb21wbGV0ZWRTdGF0ZSgpKSB7XG4gICAgY29uc29sZS5sb2codGVzdC5nZXRDb21wbGV0ZWRTdGF0ZSgpLFwidGhpcyBpcyBub3cgdHJ1ZVwiKVxufSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyh0ZXN0LmdldENvbXBsZXRlZFN0YXRlKCksXCJ0aGlzIGlzIHN0aWxsIGZhbHNlXCIpXG59XG5cbmNvbnNvbGUubG9nKHRlc3QuZ2V0Q29tcGxldGVkU3RhdGUoKSlcbi8vIGNvbnNvbGUubG9nKHRlc3QuZ2V0Q29tcGxldGVkKCkpO1xuLy8gY29uc29sZS5sb2codGVzdClcbi8vIGNvbnNvbGUubG9nKHRlc3QuZ2V0Q29tcGxldGVkKCkpO1xuLy8gY29uc29sZS5sb2codGVzdC5nZXRUYXNrRGVzY3JpcHRpb24oKSlcbi8vIHRlc3QuY2FuQ29tcGxldGUodGVzdC5zdGF0ZSk7XG4vLyBjb25zb2xlLmxvZyhjYW5Db21wbGV0ZSgpKVxuLy8gY29uc29sZS5sb2codGVzdC5jYW5Db21wbGV0ZSgpLnRvZ2dsZSlcbi8vIGNvbnNvbGUubG9nKHRlc3QpXG5jb25zb2xlLmxvZyh0ZXN0LnRvZ2dsZSgpKVxuLy8gY29uc29sZS5sb2codGVzdClcbi8vIGNvbnNvbGUubG9nKHRlc3QudG9nZ2xlQ29tcGxldGVkKCkpXG5jb25zb2xlLmxvZyh0ZXN0LmdldENvbXBsZXRlZFN0YXRlKCkpXG4vLyBjb25zb2xlLmxvZyh0ZXN0LmNhbkNvbXBsZXRlKHRlc3Quc3RhdGUpKVxuLy8gY29uc29sZS5sb2codGVzdC5jYW5Db21wbGV0ZSgpLnRvZ2dsZSgpKTtcbi8vIGNvbnNvbGUubG9nKHRlc3QpXG5cbi8vIGNvbnNvbGUubG9nKHRlc3Quc3RhdGUpXG5cbi8vIGNvbnNvbGUubG9nKHRlc3QuZ2V0Q29tcGxldGVkKCkpXG5cbmlmICh0ZXN0LmdldENvbXBsZXRlZFN0YXRlKCkpIHtcbiAgICBjb25zb2xlLmxvZyh0ZXN0LmdldENvbXBsZXRlZFN0YXRlKCksXCJ0aGlzIGlzIG5vdyB0cnVlXCIpXG59IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKHRlc3QuZ2V0Q29tcGxldGVkU3RhdGUoKSxcInRoaXMgaXMgc3RpbGwgZmFsc2VcIilcbn1cblxuY29uc29sZS5sb2codGVzdC5nZXRDb21wbGV0ZWRTdGF0ZSgpKVxuXG5jb25zb2xlLmxvZyh0ZXN0KVxuLy8gY29uc29sZS5sb2coT2JqZWN0LmdldFByb3RvdHlwZU9mKHRlc3QpKVxuY29uc29sZS5sb2codGVzdC5jb21wbGV0ZWQpXG5jb25zb2xlLmxvZyh0eXBlb2YgdGVzdCkiXSwibmFtZXMiOlsiY2FuQ29tcGxldGUiLCJvYmplY3QiLCJjb21wbGV0ZWQiLCJ0b2dnbGUiLCJnZXRDb21wbGV0ZWRTdGF0ZSIsImppbWJvIiwiT2JqZWN0IiwiYXNzaWduIiwiY29uc29sZSIsImxvZyIsInRlc3QiLCJkZXNjcmlwdGlvbiIsImdldFRhc2tEZXNjcmlwdGlvbiIsInNldFRhc2tEZXNjcmlwdGlvbiIsIm5ld0Rlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==