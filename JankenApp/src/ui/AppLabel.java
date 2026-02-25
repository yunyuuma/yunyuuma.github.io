package ui;

import javax.swing.*;
import java.awt.*;

public class AppLabel extends JLabel {

    public enum Type {
        BIG,
        NORMAL,
        IMAGE
    }

    // テキスト
    public AppLabel(String text, Type type) {
        super(text, SwingConstants.CENTER);
        applyStyle(type);
    }

    // 画像
    public AppLabel(ImageIcon icon) {
        super(icon, SwingConstants.CENTER);
        applyStyle(Type.IMAGE);
    }

    private void applyStyle(Type type) {

        switch (type) {
            case BIG -> setFont(new Font("Meiryo", Font.BOLD, 24));

            case NORMAL -> setFont(new Font("Meiryo", Font.PLAIN, 16));

            case IMAGE -> {
                setHorizontalAlignment(SwingConstants.CENTER);
                setVerticalAlignment(SwingConstants.CENTER);
            }
        }
    }

    public void updateText(String text) {
        setText(text);
        revalidate();
        repaint();
    }

    public void updateIcon(ImageIcon icon) {
        setIcon(icon);
        revalidate();
        repaint();
    }
}