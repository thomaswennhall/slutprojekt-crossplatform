import React, { useState } from "react";
import MessagesList from "@/components/messages/messages-list.component";
const TaskMessages = () => {
  const [messages, setMessages] = useState([
    {
      _id: 1,
      author: "test-user",
      title: "My title!",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque mi tempus, gravida nunc id, scelerisque neque. Donec eu diam eu elit volutpat aliquam. In in viverra dolor. Morbi massa libero, ultrices id augue eget, auctor rutrum nulla. Nullam eget ante neque. Fusce hendrerit aliquet mattis. Donec quis leo ex. Etiam et tellus molestie, ultricies elit eget, condimentum dui. Nullam volutpat consectetur posuere",
      date: new Date(),
      showMessage: false,
    },
    {
      _id: 2,
      author: "test-user",
      title: "My title!",
      content:
        "In eget finibus ante. Ut ut nisi augue. Duis vestibulum, elit quis efficitur lobortis, dolor mi hendrerit odio, eu vehicula urna mauris a tellus. Curabitur vestibulum arcu lorem, eu finibus ligula semper a. Proin tristique neque sed convallis lacinia.",
      date: new Date(),
      showMessage: false,
    },
    {
      _id: 3,
      author: "another-user",
      title: "My title!",
      content:
        "Ut in sapien at libero tincidunt fermentum quis vel lorem. Proin in risus imperdiet, convallis tortor ac, malesuada nulla. Vestibulum nec est sed nisi blandit sollicitudin. Vestibulum fermentum sem vel libero gravida tempus. Vivamus placerat posuere vulputate. Nulla facilisi. Vivamus at finibus eros",
      date: new Date(),
      unread: true,
      showMessage: false,
    },
    {
      _id: 3,
      author: "another-user",
      title: "My title!",
      content:
        "Ut in sapien at libero tincidunt fermentum quis vel lorem. Proin in risus imperdiet, convallis tortor ac, malesuada nulla. Vestibulum nec est sed nisi blandit sollicitudin. Vestibulum fermentum sem vel libero gravida tempus. Vivamus placerat posuere vulputate. Nulla facilisi. Vivamus at finibus eros",
      date: new Date(),
      unread: false,
      showMessage: false,
    },
  ]);

  return <MessagesList data={messages} />;
};

export default TaskMessages;
