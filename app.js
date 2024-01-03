{/* <script>
        // JavaScript code to link chat boxes to chat messages
        document.addEventListener('DOMContentLoaded', function () {
            const chatBoxes = document.querySelectorAll('.chat-box');
            const chatMessages = document.querySelector('.chat-messages');

            chatBoxes.forEach(function (chatBox, index) {
                chatBox.addEventListener('click', function () {
                    // Get chat message corresponding to the clicked chat box
                    const messages = chatMessages.querySelectorAll('.message-incoming, .message-outgoing');
                    
                    // Hide all chat messages
                    messages.forEach(function (message) {
                        message.style.display = 'none';
                    });

                    // Display messages for the clicked chat box
                    const startIndex = index * 2; // Each chat box has two messages (incoming and outgoing)
                    for (let i = startIndex; i < startIndex + 2; i++) {
                        messages[i].style.display = 'block';
                    }
                });
            });
        }); */}
        
        